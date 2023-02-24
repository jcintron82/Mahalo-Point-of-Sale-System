import { useEffect, useState } from "react";
import "../../css/orderpad.css";
import { customizationOptions } from "../breakfast/eggbreakfasts";
export { OrderPad, orderPadArr, orderFunc, finalOrderArr, orders};

const orderPadArr = [];
const orderFunc = {};
const finalOrderArr = [];
const managementIndexTracker = 0;
const orders = {};
const orderNum = localStorage.getItem('orderNum');
const priceArr = [0,0,orderNum];
function OrderPad() {
  // const [orderNum, setOrderNum] = useState(1);
  const [num, setnum] = useState(priceArr[2]);
  const [finalSum, setFinalSum] = useState(priceArr[0]);
  const [tips, setTips] = useState(priceArr[1]);
  const [postTip, setPostTip] = useState(finalSum + tips);
  const [tipsinput, setTipsInput] = useState(false);
  const [deleteIndex, setIndex] = useState();
  const [stately, setStately] = useState(false);
  const [input, setInput] = useState('');
  const [customInput, setCustomInput] = useState(false);
useEffect(() => {setnum(priceArr[2])})

  orderFunc.newOrder = () => {
    const PRODUCT = orderPadArr[0].message[0];
    finalOrderArr.push(PRODUCT);
    orderPadArr.splice(0);
    totalFinalSum(PRODUCT.Price.$numberDecimal);
    //Code I will eventually factor for the waffles and to prevent non applicapable addins to display
    // PRODUCT.category === "Waffles"
    //   ? setWaffleIndex(true)
    //   : setWaffleIndex(null);
    // console.log(PRODUCT.category);
    setDeleteIndex(-1);
    const sum = parseInt(priceArr[0]) + parseInt(PRODUCT.Price.$numberDecimal);
    priceArr.length > 0
      ? (priceArr[0] = sum)
      : priceArr.push(PRODUCT.Price.$numberDecimal);
  };
  //Runs on item click and uses the it's placement in the list to get its correlated
  //array placement which the delete index becomes. This is here so we can freely delete and
  //edit items in singularity
  const setDeleteIndex = (index) => {
    setStately(!stately);
    deleteIndex === index ? setIndex(-1) : setIndex(index);
    if (deleteIndex === undefined) {
      setIndex(finalOrderArr.length - 1);
    }
  };

  const deleteItem = () => {
    let sum = 0;
    priceArr[0] = priceArr[0] - finalOrderArr[deleteIndex].Price.$numberDecimal;
    finalOrderArr.splice(deleteIndex, 1);
    const x = finalOrderArr.filter((price) => {
      sum = sum + parseInt(price.Price.$numberDecimal);
      return sum;
    });
    setFinalSum(sum);
    setDeleteIndex(deleteIndex - 1);
  };
  const totalFinalSum = (itemPrice) => {
    let sum = parseInt(itemPrice);
    setFinalSum(finalSum + sum);
    console.log(finalSum)
    console.log(tips)
    setPostTip(finalSum + tips);
  };

  const submitOrder = (order) => {
    if (finalOrderArr.length > 0) {
      const newa = finalOrderArr.splice(0);
      orders['order'+order] = newa
      console.log(orders)
      updateDailySales();
      setFinalSum(0.0);
      priceArr[0] = 0.00;
      const selection = parseInt(priceArr[2])
      if(priceArr[2] > 0){
        priceArr[2] = selection + 1
      }
      else {
        priceArr[2] = 1;
      }
      // setnum(priceArr[2]);
      localStorage.setItem('orderNum', priceArr[2])
    } else {
      console.log("Add Items Please");
    }
  };
  const updateDailySales = () => {
    let currentValue = localStorage.getItem("dailySales");
    const formattedValue = parseInt(currentValue);
    const final = formattedValue + finalSum;
    localStorage.setItem('dailySales' , final.toFixed(2));
  };

  //These next two functions handle the showing/hiding of the customization input
  //and the displaying of the input onto the selected product
  const specificCuztomizations = () => { 
    setCustomInput(!customInput);
    console.log(customInput)
    if(customInput === true){
      console.log(customInput)
    }
    else{
      setInput('')
    }
  };
  const recordChange = ( input) => {
    finalOrderArr[deleteIndex].customRequest = input.target.value;
    setInput(input.target.value)
    // setStately(!stately);
  }
  const recordTip = (input) => {
    priceArr[1] = input.target.value;
    setTips(priceArr[1])
    console.log(priceArr[1])
    // setStately(!stately);
  }
  //How we're transporting cuztomization data from other components without prop drilling.
  //A calling of this function can be found in any item cuztomization component
  customizationOptions.updateState = (classification, input) => {
    finalOrderArr[deleteIndex][classification] = finalOrderArr[deleteIndex][classification] + input;
    setStately(!stately);
  };
  customizationOptions.compItem = (action, compAmt) => {
    const price = finalOrderArr[deleteIndex].Price.$numberDecimal;
    const divide = (price / 100);
    const amtOff = (divide * compAmt);
    const final = price - amtOff
    const prices = {};
    if (action === true){
      finalOrderArr[deleteIndex].Price.$numberDecimal = managementIndexTracker;
      console.log(customizationOptions)
    }
    else {
      finalOrderArr[deleteIndex].Price.$numberDecimal = final.toFixed(2);
    }
    priceArr[0] = (finalSum - amtOff);
    setFinalSum(priceArr[0]);
  }

  const addTip = () => { 
  setTipsInput(!tipsinput) 
  }
  const confirmTip = (tipValue) => { 
    setTips(priceArr[1]);
    localStorage.setItem('dailyTips', priceArr[1]);
    setPostTip(parseInt(finalSum) + tips);
    console.log(parseInt(finalSum))
    console.log(tips)
    }
  const clearCustomization = () => {
    setInput('');
  }
  useEffect(() => {setnum(priceArr[2])})
  orderFunc.trackOrderNum = () => {setnum(priceArr[2])}
  return (
    <div className="orderpadwrap">
      <ol className="orderpad-ols-wrap">Order # {num}
        <ol className="orderpad-items-wrap">
          {finalOrderArr.map((item, index) => (
            <li
              onClick={(e) => {
                setDeleteIndex(index);
              }}
              className={
                deleteIndex === index ? "highlightselectedproduct" : "priceli"
              }
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
                    {item.Protein}<br></br>
                    {item.steakTemp}
                  </li>
                  <li>
                    {item.Toast}
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
                <h3 className="lipricewrap">${item.Price.$numberDecimal}</h3>
                <h6 className="customrequestwrap">Special<br></br> Instructions: { item.customRequest }</h6>
              </div>
            </li>
          ))}
        </ol>
      </ol>
      <h5 className="subtotalWrap">Order Subtotal: ${finalSum.toFixed(2)}</h5>
      <h5 className="subtotalWrap"><label className={tipsinput ? "tipwrap" : "hide"}><span className="dollarsvg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>currency-usd</title><path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z" /></svg></span><input className={tipsinput ? "tipinput" : "hide"} type='number' onChange={recordTip}></input><button className="tipbtn" onClick={confirmTip}>Check</button></label>Tip: ${tips}</h5>
      <h5 className="subtotalWrap">Order Total: ${postTip}</h5>
         <label className={customInput ? "customizationinput" : "hide"} ><input className="customizationinput"  value={input} onChange={recordChange}></input><button className="clearbtn" onClick={clearCustomization}>Clear</button></label>
      <span className="btnswrap">
      <button
          className="deletebtn"
          onClick={(e) => specificCuztomizations({ deleteIndex })}>
          Specific Cuztomizations
        </button>
        <button
          className="deletebtn"
          onClick={(e) => deleteItem({ deleteIndex })}>
          Delete Item
        </button>
        <button className="submitbtn" onClick={addTip}>
          Add Tip
        </button>
        <button className="submitbtn" onClick={() => submitOrder(num)}>
          Submit Order
        </button>
      </span>
    </div>
  );
}

export default OrderPad;
