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
  //Pulling all of our daily orders to aggregate the final sales data
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
          <label className="labelwrap"><input
            min={1}
            maxLength='3'
            placeholder='25'
            input
            className="compinput"
            type="number"
            onChange={recordCompAmt}
          ></input><span className="percentwrap"><svg className="percentsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>percent</title><path d="M18.5,3.5L3.5,18.5L5.5,20.5L20.5,5.5M7,4A3,3 0 0,0 4,7A3,3 0 0,0 7,10A3,3 0 0,0 10,7A3,3 0 0,0 7,4M17,14A3,3 0 0,0 14,17A3,3 0 0,0 17,20A3,3 0 0,0 20,17A3,3 0 0,0 17,14Z" /></svg></span></label>
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
        <span className="compwrap">
        <button className="utilitybtns">Update Submitted Metrics</button></span>
       </div></div>
      
  );
}

export default ManagerPanel;
