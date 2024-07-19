import { useLocation, Navigate } from "react-router-dom";

interface Restaurant {
    id: string;
    name: string;
    rating: number;
    address:string; 
}


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
                            <h2>{restaurant.name}</h2>
                            <p>Rating: {restaurant.rating}</p>
                            <p>Address: {restaurant.address}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Results;