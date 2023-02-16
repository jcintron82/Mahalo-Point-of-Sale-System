import { OrderPad } from '../orderpad.js'
import { useEffect, useState } from 'react';
import { UtilityBar } from '../utilitybar'
import { useNavigate } from "react-router-dom";
import "../../css/mainscreen/homescreen-styles.css";
import { employeeMetrics } from './mainloginscreen.js';

export function HomeScreenBody() {
  const [name, setName] = useState(localStorage.getItem("name"));

  const isLoggedIn = async () => {
    console.log('AUTH')
    try {
      const call = await fetch("http://localhost:8000/confirmauth");
      const data = await call.json();
      console.log(data)
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
    <h1>Welcome Back {name}</h1>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
        <button onClick={(e) => onClick("breakfast")} className="categorybtns">Breakfast</button>
        <button className="categorybtns">Lunch/Dinner</button>
        <button className="categorybtns">Kids Menu</button>
      </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default HomeScreenBody;