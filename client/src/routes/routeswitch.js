import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import BreakfastMain from "../components/breakfast/breakfastmain";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/breakfast" element={<BreakfastMain />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
