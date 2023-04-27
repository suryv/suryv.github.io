import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";

import project_img1 from "../Assets/project_img_langapp.png";
import project_img2 from "../Assets/sb_projectmain.png";
import project_img3 from "../Assets/project_img_dribble_logo.png";


// // Toggle Image on Hover
// import React,{ useRef }  from 'react';
// import project_img1a from "../Assets/project_img1.jpg";
// const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
//   const imageRef = useRef();
//   return (
//     <img 
//       onMouseOver={() => {
//         imageRef.current.src = secondaryImg;
//       }}
//       onMouseOut={() => {
//         imageRef.current.src= primaryImg;
//       }}
//       src={primaryImg}
//       className="projectImageLink"
//       alt=""
//       ref={imageRef}
//     />
//   )
// }
// <div className="project">
//             <Link to="/Portfolio/LangApp"><ImageToggleOnMouseOver
//               primaryImg={project_img2}
//               secondaryImg={project_img1a}
//               alt=""
//               />
//             </Link>
//           </div> 


const Portfolio = () => {
    return (
      <div className="sub-content portfolio">
      {/* Link Projects */}
        <div className="project-list">

        <div className="project test">
            <Link to="/Portfolio/StarbucksSharedPoints">
              <img src={project_img2}  alt="project" className="project-image-filler" />
              <div class="img-description-layer">
                <div class="img-description">Starbucks Shared Rewards</div>
              </div>
            </Link>
          </div>

          <div className="project">
            <Link to="/Portfolio/LangApp" >
              <img src={project_img1}  alt="project" className="project-image-filler" />
                <div class="img-description-layer">
                  <div class="img-description">Reto</div>
                </div>
            </Link>
          </div>

          <div className="project">
            <a href="https://dribbble.com/sury_villalobos" target="_blank" rel="noreferrer">
              <img src={project_img3}  alt="project" className="project-image-filler" />
                <div class="img-description-layer">
                  <div class="img-description">See my work on Dribbble!</div>
                </div>
            </a>
          </div>

        </div>
      </div>
    ); 
  }

export default Portfolio;
