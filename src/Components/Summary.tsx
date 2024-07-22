// Summary.tsx
import { useState } from "react";
import useUserPreferencesStore from "../utils/userPreferencesStore";
import { useNavigate } from "react-router-dom";
import { useGeolocation } from "../utils/useGeolocation";
import { getNearbyRestaurants } from "../utils/api";
import { ReactComponent as ConfirmImage } from "../assets/confirm_header.svg";

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
    <div className="flex flex-col items-center">
      <div className="mt-16">
        <ConfirmImage />
      </div>
      <div className="flex flex-col my-auto mx-auto py-8 items-center">
        <h2 className="p-8">confirm your preferences</h2>
        <h3>diet focus</h3>
        <ul>
          {dietPreferences.map((diet) => (
            <li key={diet.id}>{diet.name}</li>
          ))}
        </ul>
        <h3 className="mt-6 p-6">allergies and restrictions</h3>
        <ul>
          {allergies.map((allergy) => (
            <li key={allergy.id}>{allergy.name}</li>
          ))}
        </ul>
        {error && <div className="text-red-600">Error: {error}</div>}
      </div>
      <button
        className="bg-[#ED6409] text-white px-4 py-2 rounded-sm h-20 w-full mt-6 mb-6"
        onClick={handleSubmit}
        disabled={isSubmitting || !latitude || !longitude}
      >
        {isSubmitting ? "Finding results" : "confirm and find food"}
      </button>
    </div>
  );
};

export default Summary;
