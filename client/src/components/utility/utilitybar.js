import "../../css/utilitybar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {LoginPopup, switchPopUp} from "./loginpopup";
export { UtilityBar, popupFunc }

const popupFunc = {};
function UtilityBar() {
  const [managerClicked, setManagerClick] = useState(false)
  const navigate = useNavigate();

  const onClick = (section) => {
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };
  popupFunc.managerPopup = () => {
    setManagerClick(!managerClicked) 
  }
  
  return (
    <footer className="utilitywrap">
       { managerClicked ? <LoginPopup /> : <div className="utilitywrap"><button onClick={popupFunc.managerPopup} className="utilitybtns">Manager Actions</button>
      <button onClick={(e) => onClick("cashout")} className="utilitybtns">Cash Out Sales</button>
      <button onClick={(e) => onClick("home")} className="utilitybtns">Home</button>
      <button onClick={(e) => navigate(-1)} className="utilitybtns"><svg className="backarrowsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold</title><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg></button></div> }
      
    </footer>
  );
}

export default UtilityBar;