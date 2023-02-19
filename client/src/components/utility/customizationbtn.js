import "../../css/utilitybar.css";
import { customizationOptions } from "../breakfast/eggbreakfasts";


export function CustomizationButton({ classification, value, text}) {

    const addSelectedCustomization = (classification, selection) => {
        customizationOptions.updateState(classification,selection);
    }
    
  return (
    <button
      onClick={(e) => addSelectedCustomization({ classification }, { value })}
      className="categorybtns"
    >{ text }
    </button>
  );
}

export default CustomizationButton;
