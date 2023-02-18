import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginScreen from "../components/mainscreen/mainloginscreen";
import BreakfastMain from "../components/breakfast/breakfastmain";
import WafflesScreen from "../components/breakfast/waffleswrap";
import CashOutScreen from "../components/utility/cashout";
import EggBreakfasts from "../components/breakfast/eggbreakfasts";
import CustomizationPanel from "../components/breakfast/customizationpanel";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/breakfast" element={<BreakfastMain />} />
        <Route path="/waffles" element={<WafflesScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cashout" element={<CashOutScreen />} />
        <Route path="/eggbreakfasts" element={<EggBreakfasts />} />
        <Route path="/customize" element={<CustomizationPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
