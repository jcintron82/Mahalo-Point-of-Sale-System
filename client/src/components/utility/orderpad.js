import { useState } from "react";
import "../../css/orderpad.css";
import { customizationOptions } from "../breakfast/eggbreakfasts";
export { OrderPad, orderPadArr, orderFunc };

const orderPadArr = [];
const orderFunc = {};
const finalOrderArr = [];

function OrderPad() {
  // const [order, setArr] = useState();
  const [finalSum, setFinalSum] = useState(0.0);
  const [deleteIndex, setIndex] = useState();
  const [stately, setStately] = useState(false);
  const [waffleIndex, setWaffleIndex] = useState(null);

  orderFunc.newOrder = () => {
    const PRODUCT = orderPadArr[0].message[0];
    finalOrderArr.push(PRODUCT);
    orderPadArr.splice(0);
    totalFinalSum(PRODUCT.Price.$numberDecimal);
    PRODUCT.category === "Waffles"
      ? setWaffleIndex(true)
      : setWaffleIndex(null);
    console.log(PRODUCT.category);
    setDeleteIndex(-1);
  };

  const setDeleteIndex = (index) => {
    setStately(!stately);
    deleteIndex === index ? setIndex(-1) : setIndex(index);
    if (deleteIndex === undefined) {
      setIndex(finalOrderArr.length - 1);
    }
    console.log(deleteIndex);
  };

  customizationOptions.updateState = (classification, input) => {
    finalOrderArr[deleteIndex][classification] = input;
    setStately(!stately);
  };

  const deleteItem = () => {
    let sum = 0;
    // if (deleteIndex > 0){
    finalOrderArr.splice(deleteIndex, 1);
    finalOrderArr.filter((price) => {
      sum = sum + parseInt(price.Price.$numberDecimal);
    });
    setFinalSum(sum);
    setDeleteIndex(-1);
    // }
    // else {
    console.log(deleteIndex);
    // }
  };
  const updateDailySales = () => {
    let currentValue = localStorage.getItem("dailySales");
    const formattedValue = parseInt(currentValue);
    const final = formattedValue + finalSum;
    localStorage.setItem("dailySales", final);
  };
  const submitOrder = () => {
    if (finalOrderArr.length > 0) {
      finalOrderArr.splice(0);
      updateDailySales();
      setFinalSum(0.0);
    } else {
      console.log("Add Items Please");
    }
  };
  const totalFinalSum = (itemPrice) => {
    let sum = parseInt(itemPrice);
    setFinalSum(finalSum + sum);
  };
  return (
    <div className="orderpadwrap">
      <ol className="orderpad-ols-wrap">
        <ol className="orderpad-items-wrap">
          {finalOrderArr.map((item, index) => (
            <li
              onClick={(e) => {
                setDeleteIndex(index);
              }}
              className={deleteIndex === index ? "hide" : "priceli"}
              key={index}
            >
              {" "}
              <div className="itemwrap">
                <h1 className="itemnamewrap">{item.Item}</h1>
                <ul className="customizationslist">
                  {/* {waffleIndex === true ? <div>THESE ARE WAFFLES</div> :  */}
                    <li>
                      {item.Eggs}
                      <br></br>
                    </li>
                    <li>
                      {item.Toast}
                      <br></br>
                    </li>
                    <li>
                      {item.Protein}
                      {item.steakTemp}
                      <br></br>
                    </li>
                    <li>
                      {item.Side}
                      <br></br>
                    </li>
                    <li>
                      {item.AddIns}
                      <br></br>
                    </li>
                </ul>
                {item.Price.$numberDecimal}
              </div>
            </li>
          ))}
        </ol>
      </ol>
      <button onClick={(e) => deleteItem({ deleteIndex })}>X</button>
      <h5 className="subtotalWrap">Order Subtotal: ${finalSum.toFixed(2)}</h5>
      <button className="utilitybtns" onClick={submitOrder}>
        Submit Order
      </button>
    </div>
  );
}

export default OrderPad;
