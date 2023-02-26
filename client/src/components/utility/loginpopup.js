import "../../css/utilitybar.css";
import "../../css/utility/managerpanel.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { popupFunc } from "./utilitybar";
export {LoginPopup, switchPopUp}

const switchPopUp = (state) => { popupFunc.managerPopup() }



 function LoginPopup() {
  const [usernameInput, setUsername] = useState("");
  const navigate = useNavigate();

  const receiveSuccessfulLogin = async (e) => {
    e.preventDefault();
    const call = await fetch("http://localhost:8000/popup");
    const data = await call.json();
    onClick(data.code);
  };

  const credentials = {
    username: usernameInput,
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      // Send data to the backend via POST
      const push = await fetch("http://localhost:8000/popup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
    } catch (err) {
      console.log(err + "ERROR");
    }
  };
  const onClick = (section) => {
    let formattedArg = "/" + section;
    console.log(section);
    navigate(section);
  };

  return (
    <form className="managerloginwrap">
      <label>
        <input type='password' placeholder="Demo ID: 123" className="manageridwrap" onChange={(e) => setUsername(e.target.value)}></input>
      </label>

      <button className="loginXsvgwrap" 
        onClick={(e) => {
          switchPopUp();
        }}
      >
       <svg className="loginXsvg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x</title><path  d="M9,7L11,12L9,17H11L12,14.5L13,17H15L13,12L15,7H13L12,9.5L11,7H9Z" /></svg>
      </button>
      <button className="managerloginbtn"
        onClick={(e) => {
          login(e);
          receiveSuccessfulLogin(e);
        }}
      >
        Log-In
      </button>
    </form>
  );
}

export default LoginPopup;
