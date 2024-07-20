import { Restaurant } from "../types/types";

const RestaurantCard: React.FC<Restaurant> = ({
  name,
  image_url,
  rating,
  distance,
  cuisine,
}) => {
  return (
    <div className="flex justify-center mt-6 border-4 border-green-500 space-x-6">
        <img src={image_url} alt={name} className="h-[60px] w-auto object-contain" />
      <div className="flex flex-col">
        <h2>{name}</h2>
        <p>{(distance / 1609).toFixed(1)} miles</p>
        <p>{rating}</p>
      </div>
      <div className="flex flex-col">
        <p>{cuisine}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
