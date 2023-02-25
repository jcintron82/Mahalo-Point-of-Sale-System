import "../../css/utilitybar.css";
import "../../css/utility/managerpanel.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { OrderPad, orders } from "./orderpad";
import { UtilityBar } from "./utilitybar";
import { finalOrderArr, managementPanelDeleteIndex } from "./orderpad";
import { customizationOptions } from "../breakfast/eggbreakfasts";

export function ManagerPanel() {
  const [compAmt, setCompAmt] = useState("");
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
  const orderObject = Object.entries(orders)
  console.log(orderObject)
  orderObject.forEach((item) => {
    return item
  })
  return (
    <div className="manageractionsmainwrap">
      <div className={loggedIn ? "hide" : "modal"}></div>
      <OrderPad />
      <div className="managementactionswrap">
        <span className="compwrap">
          <button onClick={compItem} className="utilitybtns">
            Discount Order Item
          </button>
          <label className="percentsvgwrap"><input
            min={1}
            maxLength={3}
            placeholder='50'
            className="compinput"
            type="number"
            onChange={recordCompAmt}
          ></input></label>
          {orderObject.map((item, index) => {
            <li
              // onClick={(e) => {
              //   setDeleteIndex(index);
              // }}
              // className={
              //   deleteIndex === index ? "highlightselectedproduct" : "priceli"
              // }
              key={index}
            >{item[1][0].Item + 'GGG'}gdgsgjhb{item[1][0].Item}</li>})}
        </span>
        <button className="utilitybtns">Update Submitted Metrics</button>
       </div></div>
      
  );
}

export default ManagerPanel;
