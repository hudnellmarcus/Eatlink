// Summary.tsx
import React from 'react';
import useUserPreferencesStore from '../utils/userPreferencesStore';

const Summary: React.FC = () => {
  const { dietPreferences, allergies } = useUserPreferencesStore();

  const handleSubmit = async () => {
    // Here you would make your API calls with the collected preferences
    console.log('Submitting preferences:', { dietPreferences, allergies });
    // Implement your API call logic here
  };

  return (
    <div className="flex flex-col">
      <h2>Summary of Your Preferences</h2>
     <h3>Diet Preferences:</h3>
      <ul>
        {dietPreferences.map(diet => <li key={diet.id}>{diet.name}</li>)}
      </ul>
      <h3>Allergies:</h3>
      <ul>
        {allergies.map(allergy => <li key={allergy.id}>{allergy.name}</li>)}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
    </div> 
  );
};

export default Summary;