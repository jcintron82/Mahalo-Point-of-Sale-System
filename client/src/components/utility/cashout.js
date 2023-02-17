import "../../css/utilitybar.css";
import { useState } from "react";
import { UtilityBar } from './utilitybar'


export function CashOutScreen() {
  const [lifetimeSales, setLifetimeSales] = useState(localStorage.getItem('lifetimeSales'));
  const [dailySales, setDailySales] = useState(localStorage.getItem('dailySales'));
  return (
    <div>
        <h1>Today's Sales {dailySales}</h1>
        <h1>Lifetime Sales {lifetimeSales}</h1>
   <UtilityBar />
   <button>Cash Out</button>
   </div>
   
  );
}

export default CashOutScreen;