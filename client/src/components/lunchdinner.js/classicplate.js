import { useNavigate } from 'react-router-dom'
import { OrderPad } from '../utility/orderpad.js'
import { UtilityBar } from '../utility/utilitybar'
import { customizationOptions } from '../breakfast/eggbreakfasts';
import "../../css/mainscreen/homescreen-styles.css";

export function ClassicPlate() {

    const addSelectedCustomization = (classification, selection) => {
        customizationOptions.updateState(classification,selection);
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
        <h6>Protein</h6>
        <ul className='buttonswrap'>
        <button onClick={(e) => addSelectedCustomization('Protein', 'Protein: Sirloin |')} className="categorybtns">Sirloin</button>
        <button onClick={(e) => addSelectedCustomization('Protein', 'Protein: T-Bone |')} className="categorybtns">T-Bone</button>
        <button onClick={(e) => addSelectedCustomization('Protein', 'Protein: Country Ham |')} className="categorybtns">Country Ham</button>
        <button onClick={(e) => addSelectedCustomization('Protein', 'Protein: Grilled Chicken |')} className="categorybtns">Grilled Chicken</button>
        </ul>
        <h6>Meat Temp</h6>
        <ul className='buttonswrap'>
            <button onClick={(e) => addSelectedCustomization('steakTemp', 'Temp: Rare')} className="categorybtns">Rare</button>
            <button onClick={(e) => addSelectedCustomization('steakTemp', 'Temp: Med-Rare')} className="categorybtns">Med-Rare</button>
            <button onClick={(e) => addSelectedCustomization('steakTemp', 'Temp: Medium')} className="categorybtns">Medium</button>
            <button onClick={(e) => addSelectedCustomization('steakTemp', 'Temp: Well-Done')} className="categorybtns">Well-Done</button>
        </ul>
        <h6>Toast Type</h6>
        <ul className='buttonswrap'>
            <button onClick={(e) => addSelectedCustomization('Toast', 'Toast: White |')} className="categorybtns">White</button>
            <button onClick={(e) => addSelectedCustomization('Toast', 'Toast: Wheat |')} className="categorybtns">Wheat</button>
            <button onClick={(e) => addSelectedCustomization('Toast', 'Toast: Texas |')} className="categorybtns">Texas</button>
            <button onClick={(e) => addSelectedCustomization('Toast', 'Toast: Raisin |')} className="categorybtns">Raisin</button>
        </ul>
        <h6>Side</h6>
        <ul className='buttonswrap'>
            <button onClick={(e) => addSelectedCustomization('Side', 'Side: Hashbrowns')} className="categorybtns">Hashbrowns</button>
          <button onClick={(e) => addSelectedCustomization('Side', 'Side: Grits')} className="categorybtns">Grits</button>
        </ul>
        <h6>Add Ons</h6>
          <ul className="buttonswrap">
            <button
              onClick={(e) =>
                addSelectedCustomization("AddIns", "Cheese, ")
              }
              className="categorybtns"
            >
              Cheese
            </button>
            <button
              onClick={(e) => addSelectedCustomization("AddIns", "LTO, ")}
              className="categorybtns"
            >
            LTO
            </button>
            <button
              onClick={(e) => addSelectedCustomization("AddIns", "Bacon, ")}
              className="categorybtns"
            >
            Bacon
            </button>
            <button
              onClick={(e) => addSelectedCustomization("AddIns", "Peppers, ")}
              className="categorybtns"
            >
            Peppers
            </button>
            <button
              onClick={(e) => addSelectedCustomization("AddIns", "Mushrooms, ")}
              className="categorybtns"
            >
            Mushrooms
            </button>
          </ul>
            </div>
    </div>
      {/* <UtilityBar /> */}
  </div>
  );
}

export default ClassicPlate;