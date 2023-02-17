import { useNavigate } from 'react-router-dom'

import { OrderPad } from '../utility/orderpad.js'
import { UtilityBar } from '../utility/utilitybar'
import "../../css/mainscreen/homescreen-styles.css";


export function BreakfastMain() {
  const navigate = useNavigate();

  const onClick = (section) => {
    let formattedArg = "/" + section;
      navigate(formattedArg);
  };

  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div onClick={(e) => onClick('waffles')} className="categorybtnswrap">
            <button className="categorybtns">Waffles
            </button>
            <button className="categorybtns">Egg Breakfasts
            </button>
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default BreakfastMain;