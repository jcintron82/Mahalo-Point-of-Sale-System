import { useState, useEffect } from 'react';

import { OrderPad } from '../orderpad.js'
import { UtilityBar } from '../utilitybar'
import "../../css/mainscreen/homescreen-styles.css";
// const mongoose = require("mongoose");
export const WafflesScreen = () => {
    const [message, setMessage] = useState("");
    const [productState, setProduct] = useState('Plain');
    let arr = [];

const queryProduct = (input) => {
    arr.push(input);
    try {
    // Send data to the backend via POST
     fetch('http://localhost:8000', {

method: 'POST', 
headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(arr)
})
    }
    catch(err){
        console.log('Error Here!')
        console.log(err);
    }
addToOrderClick();
arr.splice(0);
}

const addToOrderClick = async () => {
    try {
    const call = await fetch("http://localhost:8000");
    const data = await call.json();
    
        setMessage(data);
    }
    catch(err){
        console.log(err)
    }

}

  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button type='submit' onClick={(e) => {queryProduct('Plain Waffle')}} className="categorybtns">Plain
            </button>
            <button type='submit' onClick={(e) => {queryProduct('Blueberry Waffle')}}  className="categorybtns">Blueberry
            </button>
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default WafflesScreen;