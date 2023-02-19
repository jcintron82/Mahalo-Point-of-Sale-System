import { useNavigate } from 'react-router-dom'
import { customizationOptions } from './eggbreakfasts.js';
import { OrderPad } from '../utility/orderpad.js'
import { UtilityBar } from '../utility/utilitybar'
import "../../css/mainscreen/homescreen-styles.css";

export function CustomizationPanel() {

    const addSelectedCustomization = (classification, selection) => {
    // const item = customizationOptions.menuSelection.message[0]
    // console.log(item);
    // item[classification] = selection;
    // customizationOptions.edit = !customizationOptions.edit;
    customizationOptions.updateState(classification,selection);
        // const x = item[classification] = selection;
        // item[classification] = selection;
        // customizationOptions.editItems();
        // console.log(x)
        // console.log(customizationOptions.edit)
    }


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
            <li><button onClick={(e) => addSelectedCustomization('Protein', 'Bacon')} className="categorybtns">Bacon</button></li>
            <li><button onClick={(e) => addSelectedCustomization('Protein', 'Sausage')} className="categorybtns">Sausage</button></li>
            <li><button className="categorybtns">Chicken</button></li>
            <li><button className="categorybtns">Ham</button></li>
        </ul>
        <ul>Egg Style
            <li><button onClick={(e) => addSelectedCustomization('Eggs', 'Egg Style: Over Easy')} className="categorybtns">Over-Easy</button></li>
            <li><button onClick={(e) => addSelectedCustomization('Eggs', 'Egg Style: Medium')} className="categorybtns">Medium</button></li>
            <li><button className="categorybtns">Well Done</button></li>
            <li><button className="categorybtns">Boiled</button></li>
        </ul>
        <ul>Toast Type
            <li><button className="categorybtns">White</button></li>
            <li><button onClick={(e) => addSelectedCustomization('Toast', 'Wheat')} className="categorybtns">Wheat</button></li>
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