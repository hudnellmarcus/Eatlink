import "./styles.css";
import { Routes, Route } from "react-router-dom";
import UserPreferencesFlow from "./Pages/UserPreferencesFlow";
import Results from "./Pages/Results";
import Landing from "./Pages/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/preferences/*" element={<UserPreferencesFlow />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
}

export default App;
