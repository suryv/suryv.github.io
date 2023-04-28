import '../App.css';
import { Link } from "react-router-dom";

import Blink from "../Assets/pnf_blinkanimation.gif"

const PageNotFound = () => {
  return (
    <div className="sub-content page-not-found centered-txt">
        <div className="responsive-gif"><img src = {Blink} alt="blinking eye"/></div>
        <div className="m-text-container">
            <p>Sorry, the page you are looking for could not be found. The page may have moved or it no longer exists.</p> 
            <p>Try checking the URL or <Link to="/Portfolio">return home</Link>.</p>
        </div>
    </div>
  );
}

export default PageNotFound;

