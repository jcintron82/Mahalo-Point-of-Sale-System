// import { OrderPadElements } from
import { useState, useEffect } from "react";
import "../css/orderpad.css";
export { OrderPad, orderPadArr, orderFunc };

const orderPadArr = [];
const orderFunc = {};
const finalOrderArr = [];
const priceArr = [];

function OrderPad() {
  const [order, setArr] = useState("hi");
  const [price1, setPrice] = useState();

  orderFunc.newOrder = () => {
    orderPadArr.forEach((item, index) => {
      //Parsing the decimal value to be displayed
      const productPrice = JSON.stringify(item.message[0].Price);
      const parsedPrice = JSON.parse(productPrice);
      let numberDecimal = parsedPrice["$numberDecimal"];
      let priceString = parseInt(numberDecimal);

      let productItem = JSON.stringify(item.message[0].Item).replaceAll('"','');

      
      const formattedItemlist = JSON.stringify(finalOrderArr)
        .replaceAll('"', "")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .replaceAll(/\\/g, "");

      if (finalOrderArr.includes(productItem)) {
        let index = finalOrderArr.indexOf(productItem);
        const parsed = parseInt(priceArr[index]);
        priceArr[index] = parsed + priceString;
        setPrice(priceArr[index]);
      } else {
        finalOrderArr.push(productItem);
        priceArr.push(priceString);
        setArr(formattedItemlist);
        setPrice(priceString);
      }
      orderPadArr.splice(0);
    });
  };

  return (
    <div className="orderpadwrap">
      <h1>Current Order</h1>
      <div className="orderpad-ols-wrap">
        <ol className="orderpad-items-wrap">
          {/* <li>{order}</li> */}
          {finalOrderArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        <ol>
          {priceArr.map((price, index) => (
            <li className="priceli" key={index}>{price}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default OrderPad;
