import "../../css/utilitybar.css";
import { useNavigate } from "react-router-dom";

export function UtilityBar() {
  const navigate = useNavigate();

  const onClick = (section) => {
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };
  
  return (
    <footer className="utilitywrap">
      <button className="utilitybtns">Employee Report</button>
      <button onClick={(e) => onClick("manageroptions")} className="utilitybtns">Manager Actions</button>
      <button onClick={(e) => onClick("cashout")} className="utilitybtns">Cash Out Sales</button>
      <button onClick={(e) => navigate(-1)} className="utilitybtns"><svg className="backarrowsvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left-bold</title><path d="M20,9V15H12V19.84L4.16,12L12,4.16V9H20Z" /></svg></button>
    </footer>
  );
}

export default UtilityBar;