// import {
// 	BrowserRouter,
// 	Routes,
// 	Route,
// 	Link
// } from 'react-router-dom';

import "./App.css";
import { HomeScreenBody } from './components/mainscreen/mainscreenbody.js'

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8000")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div>
      <h1>Waffle House</h1>
      <HomeScreenBody />
    </div>
  );
}

export default App