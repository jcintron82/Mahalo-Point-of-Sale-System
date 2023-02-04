import { useState, useEffect } from 'react';

import { OrderPad } from '../orderpad.js'
import { UtilityBar } from '../utilitybar'
import "../../css/mainscreen/homescreen-styles.css";
// const mongoose = require("mongoose");
export const WafflesScreen = () => {
    const [message, setMessage] = useState("");
    const [productState, setProduct] = useState('Plain');
    let obj = {productState}

const queryProduct = () => {
    try {
    // Send data to the backend via POST
     fetch('http://localhost:8000', {

method: 'POST', 
headers: { 'Content-Type': 'application/json' },
    input: JSON.stringify(obj)
})
.then((res) => {res.json()})
.then(result => console.log(result))
    }
    catch(err){
        console.log('Error Here!')
        console.log(err);
    }
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
            <button onClick={(e) => {queryProduct('Plain Waffle')}} className="categorybtns">Plain
            </button>
            <button className="categorybtns">Blueberry
            </button>
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default WafflesScreen;