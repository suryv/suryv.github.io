import React from 'react';
import {  NavLink,Link } from "react-router-dom";


const Header= () =>{

  return (
  <div className="header">
    <div className="header-container">
    <div className="header-name centered-txt"><Link to="/Portfolio"><p>Sury Villalobos</p></Link></div>
    {/* <div className="menu-icon">
      <img src={MenuIcon}/>
    </div> */}

      <div className="nav-elements" >
        <NavLink to="/Portfolio" exact activeClassName='is-active' className="nav-p">Work</NavLink>
        <NavLink to="/About" activeClassName='is-active' className="nav-a">About</NavLink>
        {/* <Link to="/Contact">Contact</Link> */}
      </div>
    </div>
 

  </div>
  );
}
export default Header;