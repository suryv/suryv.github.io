import React from 'react';
import {  Link } from "react-router-dom";
const header= () =>{
  return (
  <div className="header">
    <div className="header-name"><p>SURY</p><p>VILLALOBOS</p></div>
      <div className="nav-bar">
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/About">About</Link>
        {/* <Link to="/Contact">Contact</Link> */}
      </div>
  </div>
  );
}
export default header;