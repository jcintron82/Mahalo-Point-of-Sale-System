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
    queryArr.push(input);
    try {
      const pull = await fetch("http://localhost:8000/customizedplates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(queryArr),
      });
      orderFetch();
    queryArr.splice(0);
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

  return (
    <div className='body'>
    <div className="mainwrap">
      <OrderPad />
      <div className="categorybtnswrap">
            <button onClick={(e) => onClick('blt', 'BLT')} className="categorybtns">
            <span className='btnimgwrap'><img className='btnimg' src={require('../../../images/lunchdinner/blt.jpg')}></img></span>
            <h1 className='btnh1'>BLT</h1>
            </button>
            <button onClick={(e) => onClick('texas', 'Texas Melt')} className="categorybtns">
            <span className='btnimgwrap'><img className='btnimg' src={require('../../../images/lunchdinner/texasmelt.jpg')}></img></span>
            <h1 className='btnh1'>Texas Melt</h1>
            </button>
            <button onClick={(e) => onClick('angusburger', '1/4lb Angus Burger')} className="categorybtns">
            <span className='btnimgwrap'><img className='btnimg' src={require('../../../images/lunchdinner/burger.jpg')}></img></span>
            <h1  className='btnh1'>1/4lb Angus Burger</h1>
            </button>
            </div>
    </div>
  </div>
  );
}

export default SandwichesWrap;