import React from 'react';

import ReactLogo from '../Assets/favicon.ico'

const Footer= () =>{
  return (
    <div className="footer">
          <div className="footer-contact">
            <div><a href="mailto:suryvlobos@gmail.com">suryvlobos@gmail.com</a></div>
            <div>|</div>
            <div><a href="https://www.linkedin.com/in/sarahivillalobos/" target="_blank" rel="noreferrer">LinkedIn</a></div>
            <div>|</div>
            <div><a href="https://dribbble.com/sury_villalobos" target="_blank" rel="noreferrer">Dribbble</a></div>
          </div>
          <div>
            <div>Designed and built by Sury Villalobos</div>
            
          </div>
          <div><img src={ReactLogo}  alt="reactlogo" className="react-logo" style={{height: '20px'}}/></div>
    </div>
  );
}
export default Footer;
