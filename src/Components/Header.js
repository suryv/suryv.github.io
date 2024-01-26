import React from 'react';
import {  NavLink,Link } from "react-router-dom";


const Header= () =>{

  return (
  <div className="header">
    <div className="header-container">
    <div className="header-name centered-txt"><Link to="/UnderConstruction"><p>Sury Villalobos</p></Link></div>
    {/* ADD THIS BACK WHEN YOU ARE READY TO SHOW WORK AGAIN. DELETE THE TOP ONE (Link to ="/")  */}
    {/* <div className="header-name centered-txt"><Link to="/Portfolio"><p>Sury Villalobos</p></Link></div> */}
    {/* <div className="menu-icon">
      <img src={MenuIcon}/>
    </div> */}

       {/* ADD THIS BACK WHEN YOU ARE READY TO SHOW WORK AGAIN.  */}
      {/* <div className="nav-elements" >
        <NavLink to="/Portfolio" exact activeClassName='is-active' className="nav-p">Work</NavLink>
        <NavLink to="/About" activeClassName='is-active' className="nav-a">About</NavLink>
      </div> */}
    </div>


  </div>
  );
}
export default Header;