import { OrderPad } from '../orderpad.js'
import { UtilityBar } from '../utilitybar'
import { useNavigate } from "react-router-dom";
import "../../css/mainscreen/homescreen-styles.css";

export function HomeScreenBody() {
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
        <button onClick={(e) => onClick("breakfast")} className="categorybtns">Breakfast</button>
        <button className="categorybtns">Lunch/Dinner</button>
        <button className="categorybtns">Kids Menu</button>
      </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default HomeScreenBody;