import { useNavigate } from 'react-router-dom'

import { OrderPad, orderPadArr, orderFunc } from '../utility/orderpad.js'
import { UtilityBar } from '../utility/utilitybar'
import "../../css/mainscreen/homescreen-styles.css";


export function EggBreakfasts() {
    const queryArr = [];
  const navigate = useNavigate();

  const queryProduct = async (input) => {
    queryArr.push(input);
    try {
      // Send data to the backend via POST
      const pull = await fetch("http://localhost:8000/customizedplates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryArr),
      });
      const data = await pull.json()
      orderFetch();
    queryArr.splice(0)
    } catch (err) {
      console.log(err);
    }
  };
  const orderFetch = async () => {
    try {
      const call = await fetch("http://localhost:8000/customizedplates");
      const data = await call.json();
      console.log(data)
      orderPadArr.push(data);
      orderFunc.newOrder();
      localStorage.setItem('currentorder', JSON.stringify(data))
    } catch (err) {
      console.log(err);
    }
  }

  const onClick = (item) => {
    // let formattedArg = "/" + section;
    queryProduct(item);
    navigate('/customize');
  };

  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button onClick={(e) => onClick('All Star')} className="categorybtns">All Star Special
            </button>
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default EggBreakfasts;