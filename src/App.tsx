import { useEffect, useState } from "react";
import "./styles.css";
import Header from "./Components/Header";
import Options from "./Components/Options";
import RecipeCard from "./Components/Recipe";
import { Recipe } from "../types";

function App() {
  const [diet, setDiet] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [currentRecipe, setCurrentRecipe] = useState<Recipe | null>(null);
  // let recipeArray=[""];

  const handleNewRecipe = (newRecipe: Recipe) => {
    setCurrentRecipe(newRecipe);

    localStorage.setItem("currentRecipe", JSON.stringify(newRecipe));
  };

  const handleReset = () => {
    setCurrentRecipe(null);

    localStorage.removeItem("currentRecipe");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://eatlink-server.onrender.com/api/get-recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ diet }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch recipes: ${response.statusText}`);
      }
      const data = await response.json();
      handleNewRecipe(data.recipe);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (currentRecipe) {
      localStorage.setItem("currentRecipe", JSON.stringify(currentRecipe));
    }
  }, [currentRecipe]);

  useEffect(() => {
    const savedRecipe = localStorage.getItem("currentRecipe");

    if (savedRecipe) {
      setCurrentRecipe(JSON.parse(savedRecipe));
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen background">
      <div className="flex flex-col h-screen md:h-full justify-center items-center py-6">
        <div className="flex flex-col h-[95%] w-[90%] md:w-[65%] bg-white bg-opacity-90 rounded-md m-12">
          <Header />
          <Options
            diet={diet}
            setDiet={setDiet}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />

          {loading ? <div> Loading ...</div> : null }

          {!currentRecipe && !loading ? (
            <div className="flex">
              <h3>Choose a diet and click "ask AI for recipes" to get started!</h3>
            </div>
          ) : (
            currentRecipe && <RecipeCard recipe={currentRecipe} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
