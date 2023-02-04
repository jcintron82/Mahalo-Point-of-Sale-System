import { useState, useEffect } from 'react';

import { OrderPad } from '../orderpad.js'
import { UtilityBar } from '../utilitybar'
import "../../css/mainscreen/homescreen-styles.css";
// const mongoose = require("mongoose");
export const WafflesScreen = () => {
    const [message, setMessage] = useState("");


     
      

const addToOrderClick = async () => {
    const call = await fetch("http://localhost:8000")
    const data = await call.json()
    console.log(data.message)
        // setMessage('Hi');
    }

  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button onClick={(e) => {addToOrderClick()}} className="categorybtns">Plain
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