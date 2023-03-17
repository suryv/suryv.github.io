import '../App.css';

import AboutMePic from "../Assets/aboutmepic.jpg";

const About = () => {
  return (
    <div className="sub-content about">
      <div className="about-content about-bio">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="contact">
          <div>suryvlobos@gmail.com</div>
          <div><a href="https://www.linkedin.com/in/sarahivillalobos/" target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div><a href="https://dribbble.com/sury_villalobos" target="_blank" rel="noreferrer">Dribble</a></div>
          <div><a href="https://github.com/vlobos" target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
      </div>
      <div className="about-content">
        <img src={AboutMePic}  alt="about me pic" className="about-me-pic" />
      </div>
    </div>
  );
}

export default About;
