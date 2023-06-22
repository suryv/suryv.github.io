import '../App.css';
import React from 'react';
import { Link } from "react-router-dom";

import project_img1 from "../Assets/project_img_langapp.png";
import project_img2 from "../Assets/project_img_sb.png";
import project_img3 from "../Assets/project_img_ui.png";


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

        <div className="cp-intro-container">
          <div className="cp-intro-content">
            <p><b className="name">Hi, I'm Sury!</b> A UX designer with a background in frontend development, I'm driven by the desire to create products that positively impact people's daily lives.</p>
          </div>

        </div>

        <div className="project-list">

        <div className="project">
          <div className="project-img project-image-removethis">
            <Link to="/Portfolio/StarbucksSharedPoints">
              <img src={project_img2}  alt="project" className="project-image-filler" />
              <div class="img-description-layer">
                {/* <h3 class="img-description">Click to Read More</h3> */}
              </div>
            </Link>
          </div>
          <div className="project-desc">
              <h3>Starbucks Shared Stars</h3>
              <p>A conceptual product feature that allows Starbucks customers to share their Stars with friends and family.</p>
              <Link to="/Portfolio/StarbucksSharedPoints">
                <div class="button read-more">
                  <h4>Read More</h4>
                </div>
              </Link>
            </div> 
          </div>

          <div className="project">
            <div className="project-img project-image-removethis">
              <Link to="/Portfolio/LangApp" >
              <img src={project_img1}  alt="project" className="project-image-filler" />
                <div class="img-description-layer">
                  {/* <h3 class="img-description">Click to Read More</h3> */}
                </div>
              </Link>
            </div>
            <div className="project-desc">
              <h3>Reto</h3>
              <p>A language practice app tailored to each user's unique way of learning.</p>
              <Link to="/Portfolio/LangApp" >
                <div class="button read-more">
                  <h4>Read More</h4>
                </div>
              </Link>
            </div>
          </div>

          <div className="project">
            <div className="project-img project-image-removethis">

            <Link to="/Portfolio/UIWork" >
              <img src={project_img3}  alt="project" className="project-image-filler" />
                <div class="img-description-layer">
                  {/* <h3 class="img-description">Click to Read More</h3> */}
                </div>
              </Link>
            </div>
            <div className="project-desc">
              <h3>UI Designs</h3>
              <p>A collection of my UI designs.</p>
              <Link to="/Portfolio/UIWork" >
                <div class="button read-more">
                  <h4>See More</h4>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    ); 
  }

export default Portfolio;
