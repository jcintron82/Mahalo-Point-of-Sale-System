import "../../css/utilitybar.css";
import "../../css/utility/cashoutcomponent.css";
import { useState } from "react";
import { UtilityBar } from './utilitybar';


const updateServerMetrics = async () => {
  const lifetimeSales = localStorage.getItem('lifetimeSales');
  const employeeID = localStorage.getItem('employeeID');
  const dailySales = localStorage.getItem('dailySales');
  const serverMetrics = [];

  try {
    serverMetrics.push(lifetimeSales, employeeID, dailySales)
  // Send data to the backend via POST
  const pull = await fetch("http://localhost:8000/updatemetrics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(serverMetrics)
       });
    }
    catch {
      console.log('There was an error with your metrics update.')
    }
};

export function CashOutScreen() {
  const [lifetimeSales, setLifetimeSales] = useState(localStorage.getItem('lifetimeSales'));
  const [dailySales, setDailySales] = useState(localStorage.getItem('dailySales'));
  return (
    <div className="mainwrapbody">
        <h1>Today's Sales ${dailySales}</h1>
        <h1>Lifetime Sales ${lifetimeSales}</h1>
   <UtilityBar />
   <button onClick={updateServerMetrics} className="cashoutbtn">Cash Out</button>
   </div>
   
  );
}

export default CashOutScreen;