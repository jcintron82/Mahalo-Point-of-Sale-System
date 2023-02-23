import "../../css/utilitybar.css";
import "../../css/utility/managerpanel.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrderPad } from "./orderpad";
import { UtilityBar } from "./utilitybar";
import { finalOrderArr, managementPanelDeleteIndex } from "./orderpad";
import { customizationOptions } from "../breakfast/eggbreakfasts";

export function ManagerPanel() {
  const [compAmt, setCompAmt] = useState("");
  const [restore, setRestore] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const onClick = (section) => {
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };

  const recordCompAmt = (e) => {
    let value = e.target.value;
    setCompAmt(value);
  };
  const compItem = () => {
    customizationOptions.compItem(false, compAmt);
  };
  const restorePrice = () => {
    customizationOptions.compItem(true);
  };
  return (
    <div className="manageractionsmainwrap">
      <div className={loggedIn ? "hide" : "modal"}></div>
      <OrderPad />
      <div className="managementactionswrap">
        <span>
          <button onClick={compItem} className="utilitybtns">
            Discount Order Item
          </button>
          <input
            min={1}
            maxLength={3}
            placeholder="50%"
            className="compinput"
            type="number"
            onChange={recordCompAmt}
          ></input>
        </span>
        <button onClick={restorePrice} className="utilitybtns">
          Restore Item Price
        </button>
        <button className="utilitybtns">Update Submitted Metrics</button>
       </div><UtilityBar /></div>
      
  );
}

export default ManagerPanel;
