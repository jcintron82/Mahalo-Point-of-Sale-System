import "../../css/utilitybar.css";
import "../../css/utility/cashoutcomponent.css";
import { useState } from "react";
import { UtilityBar } from './utilitybar';
import { useNavigate } from "react-router-dom";



export function CashOutScreen() {
  const [lifetimeSales, setLifetimeSales] = useState(localStorage.getItem('lifetimeSales'));
  const [dailySales, setDailySales] = useState(localStorage.getItem('dailySales'));
  const [compedValue, setCompValue] = useState(localStorage.getItem('compedValue'));
  const [preCompedValue, setPreComped] = useState(localStorage.getItem('preCompedValue'));
  const [tips, setTips] = useState(localStorage.getItem('dailyTips'));
  const [compedPercent, setCompPercent] = useState((compedValue / preCompedValue) *100 );

console.log((preCompedValue / 100) * compedValue)
  const employeeName = localStorage.getItem('name');
  const navigate = useNavigate();

  const updateServerMetrics = async () => {
    const lifetimeSales = localStorage.getItem('lifetimeSales');
    const employeeID = localStorage.getItem('employeeID');
    const dailySales = localStorage.getItem('dailySales');
    const serverMetrics = [];

    // localStorage.setItem("dailySales", 0.00);
    // localStorage.setItem("compedValue", 0);
    // localStorage.setItem("preCompedValue", 0);
    // localStorage.setItem("orderNum", 1);
  
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
        <h1 className="employeedata">Pre-Comped Sales ${preCompedValue}</h1>
        <h1 className="employeedata">Actual Sales ${dailySales}</h1>
        <h1 className="employeedata">Comped Value ${compedValue}</h1>
        <h1 className="employeedata">Tips ${tips}</h1>
        <span>{isNaN(compedPercent) ?  <h1 className="employeedata">Percentage of todays' sales comped: 0%</h1> : <h1 className="employeedata">Percentage of todays' sales comped: {compedPercent.toFixed(2)}%</h1>}</span>
        <h1 className="employeedata">Lifetime Sales To Date ${lifetimeSales}</h1>
        </section>
        <section className="cashoutbtnswrap">
        <button onClick={(e) => navigate(-1)} className="utilitybtns"><svg className="backarrowsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold</title><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg></button>
        <button onClick={updateServerMetrics} className="cashoutbtn">Cash Out</button>
        </section>
   </div>
   
  );
}

export default CashOutScreen;