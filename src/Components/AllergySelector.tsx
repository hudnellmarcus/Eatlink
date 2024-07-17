import { useState } from "react";
import { ReactComponent as Peanut } from "../assets/.svg";
import allergyImage from "../assets/Landing2.png";
import Header from "./Header";

export interface DietPreference {
  id: number;
  name: string;
}

export const dietOptions: DietPreference[] = [
  { id: 1, name: "dairy" },
  { id: 2, name: "gluten" },
  { id: 3, name: "seafood" },
  { id: 4, name: "soy" },
  { id: 5, name: "peanut" },
  { id: 6, name: "eggs" },
];

const AllergyPreferenceSelector: React.FC = () => {
  const [selectedPreferences, setSelectedPreferences] = useState<number[]>([]);
  const [showingFirstSet, setShowingFirstSet] = useState(true);

  const togglePreference = (id: number) => {
    setSelectedPreferences((prev) =>
      prev.includes(id) ? prev.filter((prefId) => prefId !== id) : [...prev, id]
    );
  };

  const toggleOptionSet = () => {
    setShowingFirstSet((prev) => !prev);
  };

  const currentOptions = showingFirstSet
    ? dietOptions.slice(0, 3)
    : dietOptions.slice(3, 6);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center py-12">
        <img src={allergyImage} alt="choose diet" className="" />
      </div>
      <div className="flex justify-center flex-col items-center py-2">
        <h5>choose any allergies</h5>

        {currentOptions.map((pref) => (
          <button
            key={pref.id}
            onClick={() => togglePreference(pref.id)}
            className={`px-4 py-2 w-36 my-4 rounded-full ${
              selectedPreferences.includes(pref.id)
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
        </div>
      </div>
    </>
  );
};

export default AllergyPreferenceSelector;
