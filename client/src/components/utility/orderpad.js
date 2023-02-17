// import { OrderPadElements } from
import { useState } from "react";
import "../../css/orderpad.css";
export { OrderPad, orderPadArr, orderFunc };

const orderPadArr = [];
const orderFunc = {};
const finalOrderArr = [];
const priceArr = [];
const qtyArr = [];

function OrderPad() {
  const [order, setArr] = useState();
  const [price1, setPrice] = useState();
  const [qty, setQty] = useState();
  const [finalSum, setFinalSum] = useState(0.0);
  const [deleteIndex, setIndex] = useState(-1);
  const [clickedColor, setColor] = useState(false);

  const updateLocal = () => {
    let currentValue = localStorage.getItem('dailySales')
    const formattedValue = parseInt(currentValue)
    const sum = parseInt(finalSum)
    const final = (formattedValue + sum);
    console.log('Formatted Value is:' + formattedValue)
    console.log('Final Sum:' + sum)
    console.log('Final' + final)
    localStorage.setItem("dailySales", final );
  }
  const submitOrder = () => {
    if (finalOrderArr.length > 0) {
      priceArr.splice(0);
      qtyArr.splice(0);
      finalOrderArr.splice(0);
      updateLocal();
      setArr(priceArr);
      setPrice(finalOrderArr);
      setQty(qtyArr);
    } else {
      console.log("Add Items Please");
    }
  };

  const setDeleteIndex = (index) => {
    setIndex(index);
    setColor(!clickedColor);
  };

  const deleteItem = () => {
    priceArr.splice(deleteIndex, 1);
    finalOrderArr.splice(deleteIndex, 1);
    qtyArr.splice(deleteIndex, 1);
    setPrice(priceArr);
    setArr(finalOrderArr);
    setQty(qtyArr);
    setIndex(1);
    totalFinalSum();
  };
  const totalFinalSum = () => {
    let sum = 0;
    priceArr.filter((price) => {
      const parsedPrice = parseInt(price);
      sum = sum + parsedPrice;
    });
    setFinalSum(sum.toFixed(2));
  };
  orderFunc.newOrder = () => {
    orderPadArr.forEach((item, index) => {
      //Parsing the decimal value to be displayed
      const productPrice = JSON.stringify(item.message[0].Price);
      const parsedPrice = JSON.parse(productPrice);
      let numberDecimal = parsedPrice["$numberDecimal"];
      let priceString = parseInt(numberDecimal);

      let productItem = JSON.stringify(item.message[0].Item).replaceAll(
        '"',
        ""
      );
      //Do not take out and try to do setArr() on line45  with something else,
      //unexpected bug where first entry is skipped will arise
      const formattedItemlist = JSON.stringify(finalOrderArr)
        .replaceAll('"', "")
        .replaceAll("[", "")
        .replaceAll("]", "")
        .replaceAll(/\\/g, "");

      const formattedQty = parseInt(item.message[0].qty);

      if (finalOrderArr.includes(productItem)) {
        let index = finalOrderArr.indexOf(productItem);
        const parsed = parseInt(priceArr[index]);
        const newPrice = parsed + priceString;
        priceArr[index] = newPrice.toFixed(2);
        setPrice(priceArr[index]);
        qtyArr[index] = qtyArr[index] + 1;
      } else {
        finalOrderArr.push(productItem);
        priceArr.push(priceString.toFixed(2));
        qtyArr.push(formattedQty);
        setArr(formattedItemlist);
        setPrice(priceString);
      }
      orderPadArr.splice(0);
    });
    totalFinalSum();
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
              className={clickedColor ? "hide" : "priceli"}
              key={index}
            >
              {item}
            </li>
          ))}
        </ol>
        <ol className="orderpad-items-wrap">
          {qtyArr.map((qty, index) => (
            <li
              onClick={(e) => {
                setDeleteIndex(index);
              }}
              className={clickedColor ? "hide" : "priceli"}
              key={index}
            >
              <select className="qtyinput" placeholder={qty}>
                <option value="1">{qty}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </li>
          ))}
        </ol>
        <ol className="orderpad-items-wrap">
          {priceArr.map((price, index) => (
            <li
              onClick={(e) => {
                setDeleteIndex(index);
              }}
              className={clickedColor ? "hide" : "priceli"}
              key={index}
              id={index}
            >
              Total: ${price}
            </li>
          ))}
          ;
        </ol>
      </ol>
      <button onClick={(e) => deleteItem({ deleteIndex })}>X</button>
      <h5 className="subtotalWrap">Order Subtotal: ${finalSum}</h5>
      <button className="utilitybtns" onClick={submitOrder}>
        Submit Order
      </button>
    </div>
  );
}

export default OrderPad;
