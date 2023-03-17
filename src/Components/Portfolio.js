import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";

import project_img1 from "../Assets/project_img1.jpg";
import project_img2 from "../Assets/project_img2.jpg";
import project_img3 from "../Assets/project_img3.jpg";


const Portfolio = () => {
  return (
    <div className="sub-content portfolio">
      <div>
        <p>UX designer and frontend developer</p>
      </div>
    {/* Link Projects */}
      <div className="project-list">
        <div className="project">
          <Link to="/Portfolio/LangApp"><img src={project_img1}  alt="example" className="projectImageLink" />
          </Link>
          <p>Language App</p>
        </div>
        <div className="project">
          <Link to="/Portfolio/LangApp"><img src={project_img2}  alt="example" className="projectImageLink" />
          </Link>
          <p>Project Name Here</p>
        </div>
        <div className="project">
          <a href="https://dribbble.com/sury_villalobos" target="_blank" rel="noreferrer"><img src={project_img3}  alt="example" className="projectImageLink" /></a>
          <p>See my work on Dribble</p>
        </div>
      </div>
    </div>
  ); 
}

export default Portfolio;
