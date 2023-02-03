import { useState, useEffect } from 'react';

import { OrderPad } from '../orderpad.js'
import { UtilityBar } from '../utilitybar'
import "../../css/mainscreen/homescreen-styles.css";
// const mongoose = require("mongoose");
export const WafflesScreen = () => {
    const [message, setMessage] = useState("");


     
      

const addToOrderClick = () => {
    fetch("http://localhost:8000")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
    console.log(message)
        // setMessage('Hi');
    }

  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button onClick={(e) => {addToOrderClick()}} className="categorybtns">Plain {message}
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