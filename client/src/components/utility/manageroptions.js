import "../../css/utilitybar.css";
import { useNavigate } from "react-router-dom";
import { OrderPad } from "./orderpad";
import { UtilityBar } from "./utilitybar"


export function ManagerPanel() {
  const navigate = useNavigate();

  const onClick = (section) => {
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };
  
  const compItem = () => {

  }

  return (
    <div>
    <OrderPad />
    <button onClick={ compItem }  className="utilitybtns">Discount Order Item</button>
    <button  className="utilitybtns">Update Submitted Metrics</button>
    <UtilityBar /> Manager Actions
    </div>
  );
}

export default ManagerPanel;