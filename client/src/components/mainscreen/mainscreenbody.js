import { OrderPad } from '../utility/orderpad.js'
import { useEffect, useState } from 'react';
import { UtilityBar } from '../utility/utilitybar'
import { useNavigate } from "react-router-dom";
import "../../css/mainscreen/homescreen-styles.css";
import { employeeMetrics } from './mainloginscreen.js';

export function HomeScreenBody() {
  const [name, setName] = useState(localStorage.getItem("name"));

  const isLoggedIn = async () => {
    try {
      const call = await fetch("http://localhost:8000/confirmauth");
      const data = await call.json();
      if (data.status != 'Authorized'){
        
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    isLoggedIn();
  })
  const navigate = useNavigate();
  
  const onClick = (section) => {
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };
  
  return (
  <div className='body'>
    <h1 className='welcomemsg'>Welcome Back {name}</h1>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
        <button onClick={(e) => onClick("breakfast")} className="categorybtns"><span className='btnimgwrap'><img className='btnimg' src={require('../../images/breakfast/breakfastmain.jpg')}></img></span>
            <h1  className='btnh1'>Breakfast</h1></button>
        <button onClick={(e) => onClick("lunchdinner")}className="categorybtns"><span className='btnimgwrap'><img className='btnimg' src={require('../../images/lunchdinner/texasmelt.jpg')}></img></span>
            <h1  className='btnh1'>Lunch/Dinner</h1></button>
        <button className="categorybtns">Kids Menu</button>
      </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default HomeScreenBody;