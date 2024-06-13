import { Recipe } from "../../types";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = (props: RecipeCardProps) => {
  //console.log(props.recipe.image)
  return (
    <div className="bg-gray-100 p-4 w-[90%] rounded-lg shadow-md mb-4 flex flex-col items-start self-center overflow-scroll">
      <div className="grid grid-cols-2">
        <h2 className="col-span-1 text-xl md:text-2xl font-bold mb-2">
          {props.recipe.name}
        </h2>
        <h3 className="col-start-1 text-lg md:text-xl font-semibold mb-1">
          Servings: {props.recipe.servings}
        </h3>
        <h3 className="col-start-1 text-lg md:text-xl font-semibold mb-1">
          Ingredients:
        </h3>
        <ul className="col-start-1 grid grid-cols-1 md:grid-cols-2 gap-1">
          {props.recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>
              {ingredient.quantity} {ingredient.measurement}{" "}
              {ingredient.ingredient} {ingredient.preparation}{" "}
            </li>
          ))}
        </ul>
        {/* <img src={props.recipe.image} alt={props.recipe.name} className="col-start-2"/> */}
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-1">Instructions:</h3>
      <ol>
        {props.recipe.instructions?.map((instruction, index) => (
          <li key={index}>- {instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
