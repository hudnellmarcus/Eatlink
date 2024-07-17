import { useState, useEffect } from "react";
import { ReactComponent as EatLinkLogo } from "../assets/eatlingologo3.svg";
import DietPreferenceSelector from "../Components/DietPrefSelector";
import AllergyPreferenceSelector from "../Components/AllergySelector";

export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      {/* <DietPreferenceSelector /> */}
      <AllergyPreferenceSelector />
    </div>
  );
};
