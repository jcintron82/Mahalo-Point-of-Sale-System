import { useNavigate } from 'react-router-dom';
import { OrderPad, orderPadArr, orderFunc } from '../../utility/orderpad.js';
import { UtilityBar } from '../../utility/utilitybar';
import "../../../css/mainscreen/homescreen-styles.css";
export { customizationOptions, SandwichesWrap };
const customizationOptions = {
    
};
function SandwichesWrap() {
    const queryArr = [];
    
  const navigate = useNavigate();

  const queryProduct = async (input) => {
//     queryArr.push(input);  const queryProduct = async (input) => {
    queryArr.push(input);
    try {
      // Send data to the backend via POST
      const pull = await fetch("http://localhost:8000/customizedplates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryArr),
      });
    //   const data = await pull.json()
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
      console.log(customizationOptions)
    } catch (err) {
      console.log(err);
    }
  }

  const onClick = (section, item) => {
    let formattedArg = "/" + section;
    queryProduct(item);
    navigate(formattedArg);
  };

  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button onClick={(e) => onClick('blt', 'BLT')} className="categorybtns">BLT
            </button>
            <button onClick={(e) => onClick('texas', 'Texas Melt')} className="categorybtns">Texas Melt
            </button>
            <button onClick={(e) => onClick('angusburger', '1/4lb Angus Burger')} className="categorybtns">1/4lb Angus Burger
            </button>
            </div>
    </div>
      <UtilityBar />
  </div>
  );
}

export default SandwichesWrap;