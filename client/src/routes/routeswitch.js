import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import LoginScreen from "../components/mainscreen/mainloginscreen";
import BreakfastMain from "../components/breakfast/breakfastmain";
import WafflesScreen from "../components/breakfast/waffleswrap";
import CashOutScreen from "../components/utility/cashout";
import EggBreakfasts from "../components/breakfast/eggbreakfasts";
import LunchDinner from "../components/lunchdinner.js/lunchdinner";
import ClassicPlate from "../components/lunchdinner.js/classicplate";
import CustomizationPanel from "../components/breakfast/customizationpanel";
import ManagerPanel from "../components/utility/manageroptions";
import SandwichesWrap from "../components/lunchdinner.js/sandwiches/sandwicheswrap";
import BLT from "../components/lunchdinner.js/sandwiches/blt";
import TexasMelt from "../components/lunchdinner.js/sandwiches/texasmelt";
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
        <Route path="/lunchdinner" element={<LunchDinner />} />
        <Route path="/customize" element={<CustomizationPanel />} />
        <Route path="/classicplate" element={<ClassicPlate />} />

        <Route path="/blt" element={<BLT />} />
        <Route path="/texas" element={<TexasMelt />} />
        <Route path="/sandwiches" element={<SandwichesWrap />} />
        <Route path="/manageroptions" element={<ManagerPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
