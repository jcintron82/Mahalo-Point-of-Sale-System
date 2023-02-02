import { OrderPad } from '../orderpad.js'
import { UtilityBar } from '../utilitybar'
import "../../css/mainscreen/homescreen-styles.css";

export const WafflesScreen = () => {
  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button className="categorybtns">Plain
            </button>
            <button className="categorybtns">Blueberry
            </button>
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default WafflesScreen;