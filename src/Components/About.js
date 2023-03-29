import '../App.css';

import AboutMePic from "../Assets/aboutmepic.jpg";

const About = () => {
  return (
    <div className="sub-content about">
      <div className="about-content about-bio">
        <p>Coming soon!</p>
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
