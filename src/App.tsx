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
      const response = await fetch("http://localhost:3000/api/get-recipe", {
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
      <div className="flex flex-col items-center py-8">
        <div className="flex flex-col h-[95%] w-[65%] bg-white rounded-md m-14">
          <Header />
          <Options
            diet={diet}
            setDiet={setDiet}
            handleSubmit={handleSubmit}
            handleReset={handleReset}
          />

          {loading || !currentRecipe ? (
            <div>Loading...</div>
          ) : (
            currentRecipe && <RecipeCard recipe={currentRecipe} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
