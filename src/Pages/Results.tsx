import { useLocation, Navigate } from "react-router-dom";
import RestaurantCard from "../Components/RestaurantCard";
import { Restaurant } from "../types/types";




interface LocationState {
    restaurants: Restaurant[];
};

const Results: React.FC = () => {
    const location = useLocation();
    const state = location.state as LocationState; 

    // If there's no state, it means the user accessed this page directly
    if (!state || !state.restaurants) {
        return <Navigate to="/confirm" replace />;
    }

    const { restaurants } = state;


    return (
        <div>
            <h1>Restaurants Near You</h1>
            {restaurants.length === 0 ? (
                <p>No restaurants found.</p>
            ) : (
                <ul>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id}>
                          <RestaurantCard key={restaurant.id} {...restaurant} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Results;