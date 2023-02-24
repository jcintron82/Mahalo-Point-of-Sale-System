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
      <div className="categorybtnswrap">
            <button onClick={(e) => onClick('waffles')} className="categorybtns"><span className='btnimgwrap'><img className='btnimg' src={require('../../images/wafflemain.avif')}></img></span><h1 className='btnh1'>Waffles</h1>
            </button>
            <button onClick={(e) => onClick('eggbreakfasts')} className="categorybtns"><span className='btnimgwrap'><img className='btnimg' src={require('../../images/eggbreakfast.jpg')}></img></span><h1 className='btnh1'>Egg Breakfasts</h1>
            </button>
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default BreakfastMain;