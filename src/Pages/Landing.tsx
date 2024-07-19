import Header from "../Components/Header";
import { useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/preferences/diet");
  };

  return (
    <>
      <Header />
    <div className="flex flex-col items-center h-80 justify-center">
      <button onClick={handleGetStarted}>get started</button>
      </div>
    </>
  );
};

export default Landing;
