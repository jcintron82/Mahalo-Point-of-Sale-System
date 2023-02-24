import "../../css/utilitybar.css";
import "../../css/utility/cashoutcomponent.css";
import { useState } from "react";
import { UtilityBar } from './utilitybar';
import { useNavigate } from "react-router-dom";



export function CashOutScreen() {
  const [lifetimeSales, setLifetimeSales] = useState(localStorage.getItem('lifetimeSales'));
  const [dailySales, setDailySales] = useState(localStorage.getItem('dailySales'));
  const employeeName = localStorage.getItem('name');
  const navigate = useNavigate();

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
      navigate('/login')
  };
  return (
    <div className="cashoutscreenbody">
      <section className="employeedatasectionwrap">
        <h1 className="employeedata">Employee: {employeeName}</h1>
        <h1 className="employeedata">Today's Sales ${dailySales}</h1>
        <h1 className="employeedata">Today's Comped Value ${dailySales}</h1>
        <h1 className="employeedata">Percentage of todays' sales comped: {dailySales}</h1>
        <h1 className="employeedata">Lifetime Sales To Date ${lifetimeSales}</h1>
        </section>
   <UtilityBar />
   <button onClick={updateServerMetrics} className="cashoutbtn">Cash Out</button>
   </div>
   
  );
}

export default CashOutScreen;