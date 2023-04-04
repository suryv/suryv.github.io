import React from 'react';
import {  NavLink,Link } from "react-router-dom";

const header= () =>{
  return (
  <div className="header">
    <div className="header-name"><Link to="/Portfolio"><p>SURY</p><p>VILLALOBOS</p></Link></div>
      <div className="nav-bar">
        <NavLink to="/Portfolio" exact activeClassName='is-active' className="nav-p">Portfolio</NavLink>
        <NavLink to="/About" activeClassName='is-active' className="nav-a">About</NavLink>
        {/* <Link to="/Contact">Contact</Link> */}
      </div>
  </div>
  );
}
export default header;