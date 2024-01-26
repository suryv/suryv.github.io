import '../App.css';

import Blink from "../Assets/pnf_blinkanimation.gif"

const UnderConstruction = () => {
  return (
    <div className="sub-content page-not-found under-construction centered-txt">
        <div className="responsive-gif"><img src = {Blink} alt="blinking eye"/></div>
        <div className="m-text-container">
            <p>Hey there! I'm making some changes to my portfolio.</p> 
            <p>You can contact me at <a href="mailto:suryvlobos@gmail.com">suryvlobos@gmail.com</a>.</p>
            <p>Check back soon!</p> 
        </div>
    </div>
  );
}

export default UnderConstruction;

