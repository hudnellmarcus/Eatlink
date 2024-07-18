import { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import DietPreferenceSelector from "../Components/DietPreferenceSelector";
import AllergyPreferenceSelector from "../Components/AllergySelector";
import Summary from "../Components/Summary";
import useUserPreferencesStore from "../utils/userPreferencesStore";


const UserPreferencesFlow: React.FC = () => {
    const location = useLocation(); 
    const { resetPreferences } = useUserPreferencesStore();

/// Reset Preferences when user navigates to home page 

useEffect(() => {
    if (location.pathname=== '/') {
        resetPreferences()
    }
}, [location, resetPreferences]);

  return (
    <Routes>
      <Route path="/" element={<DietPreferenceSelector />} />
      <Route path="/allergies" element={<AllergyPreferenceSelector />} />
      <Route path="/confirm" element={<Summary />} />
    </Routes>
  )
};

export default UserPreferencesFlow;
