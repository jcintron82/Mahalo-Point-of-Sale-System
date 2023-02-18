// import { OrderPadElements } from
import { useState } from "react";
import "../../css/orderpad.css";
export { OrderPad, orderPadArr, orderFunc };

const orderPadArr = [];
const orderFunc = {};
const finalOrderArr = [];

function OrderPad() {
  const [order, setArr] = useState();
  const [finalSum, setFinalSum] = useState(0.0);
  const [deleteIndex, setIndex] = useState(-1);

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

  const setDeleteIndex = (index) => {
    deleteIndex === index ? setIndex(-1) : setIndex(index);
  };

  const deleteItem = () => {
    let sum = 0;
    finalOrderArr.splice(deleteIndex, 1);
    finalOrderArr.filter((price) => {
      sum = sum + parseInt(price.Price.$numberDecimal);
    });
    setFinalSum(sum);
    setDeleteIndex(-1);
    sum = 0;
  };

  const totalFinalSum = (itemPrice) => {
    let sum = parseInt(itemPrice);
    setFinalSum(finalSum + sum);
  };

  orderFunc.newOrder = () => {
    const PRODUCT = orderPadArr[0].message[0];
    finalOrderArr.push(PRODUCT);
    orderPadArr.splice(0);
    totalFinalSum(PRODUCT.Price.$numberDecimal);
  }
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
              {item.Item}
              {item.qty}
              {item.Price.$numberDecimal}
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
