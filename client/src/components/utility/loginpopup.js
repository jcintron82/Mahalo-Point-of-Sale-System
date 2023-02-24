import "../../css/utilitybar.css";
import "../../css/utility/managerpanel.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function LoginPopup() {
    const [usernameInput, setUsername] = useState('');
  const navigate = useNavigate();

  const receiveSuccessfulLogin = async (e) => {
    e.preventDefault();
    console.log('????')
    const call = await fetch("http://localhost:8000/popup");
        const data = await call.json();
        console.log(data);
        console.log(call)
        onClick(data.code)
        }

        const credentials = {
            username: usernameInput,
        }

  const login = async (e) => {
    console.log('????')
    e.preventDefault();
    console.log('????')
    try {
        // Send data to the backend via POST
        const push = await fetch("http://localhost:8000/popup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        console.log(push);
        console.log(credentials)
      } catch (err) {
        console.log(err + 'ERROR');
      }
      console.log('????')
      receiveSuccessfulLogin()
};
  const onClick = (section) => {
    let formattedArg = "/" + section;
    console.log(section)
    navigate(section);
  };
  
  return (
    <form >
      <label>Login Modal
        <input onChange={(e) => setUsername(e.target.value)}></input>
      </label>
      <button onClick={login}>Log-In</button><button onClick={receiveSuccessfulLogin}>Cancel</button>
    </form>
  );
}

export default LoginPopup;