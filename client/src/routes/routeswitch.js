import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginScreen from "../components/mainscreen/mainloginscreen";
import BreakfastMain from "../components/breakfast/breakfastmain";
import WafflesScreen from "../components/breakfast/waffleswrap";
import CashOutScreen from "../components/utility/cashout";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/breakfast" element={<BreakfastMain />} />
        <Route path="/waffles" element={<WafflesScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cashout" element={<CashOutScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
