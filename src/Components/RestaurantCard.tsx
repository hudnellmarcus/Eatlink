import { Restaurant } from "../types/types";

type Rating = 0 | 0.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5;

const ratingImages: Record<Rating, string> = {
  0: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_0@2x.png",
  0.5: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_half@2x.png",
  2: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_2@2x.png",
  2.5: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_2_half@2x.png",
  3: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_3@2x.png",
  3.5: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_3_half@2x.png",
  4: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_4@2x.png",
  4.5: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_4_half@2x.png",
  5: "src/assets/Review Ribbon/Desktop/small_16/Review_Ribbon_small_16_5@2x.png",
};

const getRatingImage = (rating: number): string => {
  const roundedRating = Math.round(rating * 2) / 2;

  if (isRating(roundedRating)) {
    return ratingImages[roundedRating];
  }

  return ratingImages[0];
};

// type guard function
function isRating(value: number): value is Rating {
  return Object.keys(ratingImages).includes(value.toString());
}

const RestaurantCard: React.FC<Restaurant> = ({
  name,
  image_url,
  rating,
  distance,
  categories,
}) => {

  const categoryTitles = categories.map((category) => category.title).join(", ");

  return (
    <div className="flex flex-col w-[90vw] p-2">
      <div className="flex justify-center p-2 min-height-[90px] max-h-[150px] rounded-t-md">
        <div className="flex w-[25%] bg-cover"
        style={{backgroundImage: `url(${image_url})`}}>
        
        </div>
        <div className="flex flex-col w-[50%] items-center">
          <h2 className="font-bold text-md text-center">{name}</h2>
          <p className="text-[#AAACAD] text-sm">
            ({(distance / 1609).toFixed(1)} miles)
          </p>
          <img src={getRatingImage(rating)} className="h-4 w-auto" />
        </div>
        <div className="flex flex-col w-[25%]">
            <p className="text-[#AAACAD] text-sm">
              {categoryTitles.toLowerCase()}
            </p>    
        </div>
      </div>
      <div>
        <button className="w-full h-12 text-white bg-[#ED6409]">see options</button>
      </div>
    </div>
  );
};

export default RestaurantCard;
