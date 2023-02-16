import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/mainscreen/loginscreen.css";
export {employeeMetrics, LoginScreen}

const employeeMetrics = {
    name:'a',
    lifetimeSales:'a',
}

const incorrectPassword = (name, sales) => {
    
}
 function LoginScreen() {
    const [usernameInput, setUsernmae] = useState('');
    const [passwordInput, setPassword] = useState('');
    const [incorrectPasswordMessage, setMessage] = useState(true);

    const credentials = {
        username: usernameInput,
        password: passwordInput
    }
  const navigate = useNavigate();

  const receiveSuccessfulLogin = async () => {
    const call = await fetch("http://localhost:8000/login");
        const data = await call.json();
        console.log(data);
        if(!data.employeeName){
            setMessage('Incorrect Username/Password')
        }
        else{
        employeeMetrics.name = data.employeeName
        employeeMetrics.lifetimeSales = data.lifetimeSales;
        localStorage.setItem("name", data.employeeName);
        navigate(data.code);
        }
}

  const login = async () => {
    try {
        // Send data to the backend via POST
        const push = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        const data = await push.json();
      } catch (err) {
        console.log(err + 'ERROR');
      }
      receiveSuccessfulLogin();
};
  
//   const onClick = (section) => {
//     let formattedArg = "/" + section;
//     navigate(formattedArg);
//   };
// const getUser = async () => {
//     const call = await fetch("http://localhost:8000/login");
//     const data = await call.json();
//     console.log(data)
//     receiveSuccessfulLogin()
// };

  return (
    <div className='body'>
        <h1 className="incorrectpasswordwrapper">{incorrectPasswordMessage}</h1>
        <label>Employee ID 
            <input required type='number' onChange={(e) => setUsernmae(e.target.value)}></input>
        </label>
        <label>Password
            <input required type='password' onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <button onClick={(e) => {login(); receiveSuccessfulLogin()}}>Log-In</button>
    </div>

  );
}

export default LoginScreen;