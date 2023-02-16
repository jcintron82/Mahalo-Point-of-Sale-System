import { OrderPad, orderPadArr, orderFunc } from "../orderpad.js";
import { UtilityBar } from "../utilitybar";
import "../../css/mainscreen/homescreen-styles.css";

// const mongoose = require("mongoose");
export const WafflesScreen = () => {
  let queryArr = [];

  const queryProduct = async (input) => {
    queryArr.push(input);
    try {
      // Send data to the backend via POST
      const pull = await fetch("http://localhost:8000/waffles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryArr),
      });
      queryArr.splice(0);
      addToOrderClick();
    } catch (err) {
      console.log(err);
    }
  };

  const addToOrderClick = async () => {
    try {
      const call = await fetch("http://localhost:8000/waffles");
      const data = await call.json();
      orderPadArr.push(data);
      orderFunc.newOrder();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="body">
      <div className="mainwrap">
        <OrderPad />
        <div className="categorybtnswrap">
          <button
            type="submit"
            onClick={(e) => {
              queryProduct("Plain Waffle");
            }}
            className="categorybtns"
          >
            Plain Waffle
          </button>
          <button
            type="submit"
            onClick={(e) => {
              queryProduct("Blueberry Waffle");
            }}
            className="categorybtns"
          >
            Blueberry Waffle
          </button>
          <button
            type="submit"
            onClick={(e) => {
              queryProduct("Chocolate Chip Waffle");
            }}
            className="categorybtns"
          >
            Chocolate Chip Waffle
          </button>
        </div>
      </div>
      <UtilityBar />
    </div>
  );
};

export default WafflesScreen;
