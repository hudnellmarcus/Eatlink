//import { Ingredient } from "../../types";

import { Ingredients, Recipe } from "../../types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = (props: RecipeCardProps) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold mb-2">{props.recipe.name}</h2>
      <h3 className="text-xl font-semibold mb-1">
        Servings: {props.recipe.servings}
      </h3>
      <h3 className="text-xl font-semibold mb-1">Ingredients:</h3>
      <ul>
        {props.recipe.ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient.quantity} {ingredient.measurement} {ingredient.ingredient} {ingredient.preparation} </li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mb-1">Instructions:</h3>
      <ol>
        {props.recipe.instructions?.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
