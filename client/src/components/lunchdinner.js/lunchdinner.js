import { useNavigate } from 'react-router-dom';
import { OrderPad, orderPadArr, orderFunc } from '../utility/orderpad.js';
import { UtilityBar } from '../utility/utilitybar';
import "../../css/mainscreen/homescreen-styles.css";
export { customizationOptions, LunchDinner };
const customizationOptions = {
    
};
function LunchDinner() {
    const queryArr = [];
    
  const navigate = useNavigate();

  const queryProduct = async (input) => {
    queryArr.push(input);
    try {
      const pull = await fetch("http://localhost:8000/customizedplates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryArr),
      });
      orderFetch();
    queryArr.splice(0)
    } catch (err) {
      console.log(err);
    }
  };

  const orderFetch = async () => {
    try {
      const call = await fetch("http://localhost:8000/customizedplates");
      const data = await call.json();
      orderPadArr.push(data);
      orderFunc.newOrder();
      customizationOptions.menuSelection = data;
    } catch (err) {
      console.log(err);
    }
  }

  const onClick = (section, item) => {
    let formattedArg = "/" + section;
    queryProduct(item);
    navigate(formattedArg);
  };
 const toSandwiches = () => {
  navigate('/sandwiches')
 }
  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button onClick={(e) => onClick('classicplate', 'Classic Plate')} className="categorybtns"><span className='btnimgwrap'><img className='btnimg' src={require('../../images/lunchdinner/classicplate.jpg')}></img></span>
            <h1  className='btnh1'>Classic Plate</h1>
            </button>
            <button onClick={(e) => toSandwiches()} className="categorybtns"><span className='btnimgwrap'><img className='btnimg' src={require('../../images/lunchdinner/sandwichesmain.jfif')}></img></span>
            <h1  className='btnh1'>Sandwiches</h1>
            </button>
            </div>
    </div>
  </div>
  );
}

export default LunchDinner;