// Summary.tsx
import { useState } from "react";
import useUserPreferencesStore from "../utils/userPreferencesStore";
import { useNavigate } from "react-router-dom";
import { useGeolocation } from "../utils/useGeolocation";
import { getNearbyRestaurants } from "../utils/api";

const Summary: React.FC = () => {
  const navigate = useNavigate();
  const { dietPreferences, allergies } = useUserPreferencesStore();
  const { latitude, longitude, error: locationError } = useGeolocation();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!latitude || !longitude) {
      setError(
        "Unable to get your location. Please enable location services and try again."
      );
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
     const restaurants = await getNearbyRestaurants({
       // dietPreferences: dietPreferences.map((diet) => diet.name),
        //allergies: allergies.map((allergy) => allergy.name),
        location: { latitude, longitude },
      });

      // Navigate to results page after successful submission
      navigate("/results", { state: { restaurants } });
    } catch (err) {
      setError("Failed to submit preferences. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (locationError) {
    return <div>Error: {locationError}</div>;
  }

  return (
    <div className="flex flex-col">
      <h2>Summary of Your Preferences</h2>
      <h3>Diet Preferences:</h3>
      <ul>
        {dietPreferences.map((diet) => (
          <li key={diet.id}>{diet.name}</li>
        ))}
      </ul>
      <h3>Allergies:</h3>
      <ul>
        {allergies.map((allergy) => (
          <li key={allergy.id}>{allergy.name}</li>
        ))}
      </ul>
      {error && <div className="text-red-600">Error: {error}</div>}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting || !latitude || !longitude}
      >
        {isSubmitting ? "Finding results" : "View Restaurants"}
      </button>
    </div>
  );
};

export default Summary;
