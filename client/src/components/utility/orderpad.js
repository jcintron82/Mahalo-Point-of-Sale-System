import { useState } from "react";
import "../../css/orderpad.css";
import { customizationOptions } from "../breakfast/eggbreakfasts";
export { OrderPad, orderPadArr, orderFunc, finalOrderArr};

const orderPadArr = [];
const orderFunc = {};
const finalOrderArr = [];
const priceArr = [0,0];
const managementIndexTracker = 0;

function OrderPad() {
  const [finalSum, setFinalSum] = useState(priceArr[0]);
  const [tips, setTips] = useState(priceArr[1]);
  const [tipsinput, setTipsInput] = useState(false);
  const [deleteIndex, setIndex] = useState();
  const [stately, setStately] = useState(false);
  const [input, setInput] = useState('');
  const [customInput, setCustomInput] = useState(false);

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
  };

  const submitOrder = () => {
    if (finalOrderArr.length > 0) {
      finalOrderArr.splice(0);
      updateDailySales();
      setFinalSum(0.0);
      priceArr[0] = 0.00;
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
    console.log(finalOrderArr[deleteIndex].Price);
    // let sum = 0;
    // const x = finalOrderArr.filter((price) => {
    //   sum = sum + parseInt(price.Price.$numberDecimal);
    //   return sum;
    // });
    priceArr[0] = (finalSum - amtOff);
    setFinalSum(priceArr[0]);
  }
  const addTip = () => { 
  setTipsInput(!tipsinput) 
  }
  const confirmTip = (tipValue) => { 
    setTips(priceArr[1]);
    localStorage.setItem('dailyTips', priceArr[1]);
    }
  const clearCustomization = () => {
    setInput('');
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
      <h5 className="subtotalWrap"><label className={tipsinput ? "tipwrap" : "hide"}><input className={tipsinput ? "tipinput" : "hide"} type='number' onChange={recordTip}></input><button onClick={confirmTip}>Check</button></label>Tip: ${tips}</h5>
      <h5 className="subtotalWrap">Order Total: ${finalSum.toFixed(2)}</h5>
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
        <button className="submitbtn" onClick={submitOrder}>
          Submit Order
        </button>
      </span>
    </div>
  );
}

export default OrderPad;
