import { useNavigate } from 'react-router-dom'

import { OrderPad } from '../utility/orderpad.js'
import { UtilityBar } from '../utility/utilitybar'
import "../../css/mainscreen/homescreen-styles.css";

export function CustomizationPanel() {

    const addSelection = () => {
        // localStorage.setItem('currentorder')
    };


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
        <ul>Protein Type
            <li><button onClick={addSelection} className="categorybtns">Bacon</button></li>
            <li><button className="categorybtns">Sausage</button></li>
            <li><button className="categorybtns">Chicken</button></li>
            <li><button className="categorybtns">Ham</button></li>
        </ul>
        <ul>Egg Style
            <li><button className="categorybtns">Over-Easy</button></li>
            <li><button className="categorybtns">Medium</button></li>
            <li><button className="categorybtns">Well Done</button></li>
            <li><button className="categorybtns">Boiled</button></li>
        </ul>
        <ul>Toast Type
            <li><button className="categorybtns">White</button></li>
            <li><button className="categorybtns">Wheat</button></li>
            <li><button className="categorybtns">Raisin</button></li>
        </ul>
        
        <ul>Side
            <li><button className="categorybtns">Hashbrowns</button></li>
            <li><button className="categorybtns">Grits</button></li>
        </ul>
           
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default CustomizationPanel;