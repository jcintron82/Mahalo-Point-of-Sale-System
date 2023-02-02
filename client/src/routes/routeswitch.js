import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import BreakfastMain from "../components/breakfast/breakfastmain";
import WafflesScreen from "../components/breakfast/waffleswrap";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/breakfast" element={<BreakfastMain />} />
        <Route path="/waffles" element={<WafflesScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
