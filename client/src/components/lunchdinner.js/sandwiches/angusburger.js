import { useNavigate } from "react-router-dom";
import { OrderPad } from "../../utility/orderpad.js";
import { UtilityBar } from "../../utility/utilitybar";
import { customizationOptions } from "../../breakfast/eggbreakfasts";
import "../../../css/mainscreen/homescreen-styles.css";

export function AngusBurger() {
    const customizationsArr = [];

  const addAddOns = (classification, selection) => {
    // customizationsArr.push(selection)
    addSelectedCustomization(classification, selection);
  }  
  const addSelectedCustomization = (classification, selection) => {
    // customizationOptions.options = customizationsArr;
    customizationOptions.updateState(classification, selection);
  };

  const navigate = useNavigate();

  const onClick = (section) => {
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };

  return (
    <div className="body">
      <div className="mainwrap">
        <OrderPad />
        <div className="categorybtnswrap">
        <h6>Protein</h6>
          <ul className="buttonswrap">
            <button
              onClick={(e) =>
                addSelectedCustomization("AddIns", "Extra Patty")
              }
              className="categorybtns"
            >
              Extra Patty
            </button>
          </ul>
          <h6>Side</h6>
          <ul className="buttonswrap">
            <button
              onClick={(e) =>
                addSelectedCustomization("Side", "Side: Hashbrowns")
              }
              className="categorybtns"
            >
              Hashbrowns
            </button>
            <button
              onClick={(e) => addSelectedCustomization("Side", "Side: Grits")}
              className="categorybtns"
            >
              Grits
            </button>
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
              onClick={(e) => addAddOns("AddIns", "LTO, ")}
              className="categorybtns"
            >
            LTO
            </button>
            <button
              onClick={(e) => addAddOns("AddIns", "Bacon, ")}
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
    </div>
  );
}

export default AngusBurger;
