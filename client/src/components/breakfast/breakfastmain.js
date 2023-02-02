import { OrderPad } from '../orderpad.js'
import { UtilityBar } from '../utilitybar'
import "../../css/mainscreen/homescreen-styles.css";

export function BreakfastMain() {
  return (
    <div class='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
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