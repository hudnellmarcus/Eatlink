import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import UserPreferencesStore, { Preference } from "../utils/userPreferencesStore";
import { ReactComponent as Salad } from "../assets/salad.svg";
import dietStepImage from "../assets/LandingStatus1.png";
import Header from "./Header";



export const dietOptions: Preference[] = [
  { id: 1, name: "low carb" },
  { id: 2, name: "vegan" },
  { id: 3, name: "vegetarian" },
  { id: 4, name: "paleo" },
  { id: 5, name: "keto" },
  { id: 6, name: "pescatarian" },
];

const DietPreferenceSelector: React.FC = () => {
  const { setDietPreferences, resetPreferences } = UserPreferencesStore();
  const navigate = useNavigate();

  const [selectedPreferences, setSelectedPreferences] = useState<Preference[]>([]);
  const [showingFirstSet, setShowingFirstSet] = useState(true);

  const togglePreference = (preference: Preference) => {
    setSelectedPreferences((prev) =>
      prev.some(p => p.id === preference.id) 
      ? prev.filter(p => p.id !== preference.id) : [...prev, preference]
    );
  };

  const toggleOptionSet = () => {
    setShowingFirstSet((prev) => !prev);
  };

  const currentOptions = showingFirstSet
    ? dietOptions.slice(0, 3)
    : dietOptions.slice(3, 6);

  const handleNext = () => {
    setDietPreferences(selectedPreferences);
    navigate('/allergies'); 
  };

  //Reset the preferences 
  useEffect(() => {
    resetPreferences();
  }, [resetPreferences]);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center py-12">
        <Salad />
        <img src={dietStepImage} alt="choose diet" className="mt-8" />
      </div>
      <div className="flex justify-center flex-col items-center py-6">
        <h5>enter your diet focus</h5>

        {currentOptions.map((pref) => (
          <button
            key={pref.id}
            onClick={() => togglePreference(pref)}
            className={`px-4 py-2 w-36 my-4 rounded-full ${
              selectedPreferences.some(selectedPref => selectedPref.id === pref.id)
                ? "bg-blue-500 text-white"
                : "bg-gray-500 text-white"
            }`}
          >
            {pref.name}
          </button>
        ))}
        <div className="flex space-x-6">
          <span
            onClick={toggleOptionSet}
            className="text-black hover:text-blue-500 cursor-pointer underline"
          >
            {showingFirstSet ? "see more" : "go back"}
          </span>
          <span className="text-black hover:text-blue-500 cursor-pointer underline">
            <button onClick={handleNext}>next</button>
          </span>
        </div>
      </div>
    </>
  );
};

export default DietPreferenceSelector;
