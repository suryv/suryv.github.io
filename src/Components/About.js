import '../App.css';

import AboutMePic from "../Assets/aboutmepic.jpg";

const About = () => {
  return (
    <div className="sub-content about">
      <div className="about-content about-bio">
        <p>Hi! I'm a UX/UI designer and web developer based in Los Angeles.</p>
        <div className="contact">
          <div><a href="mailto:suryvlobos@gmail.com">suryvlobos@gmail.com</a></div>
          <div><a href="https://www.linkedin.com/in/sarahivillalobos/" target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div><a href="https://dribbble.com/sury_villalobos" target="_blank" rel="noreferrer">Dribble</a></div>
          <div><a href="https://github.com/vlobos" target="_blank" rel="noreferrer">GitHub</a></div>
        </div>
      </div>
      <div className="about-content about-img">
        <img src={AboutMePic}  alt="about me pic" className="about-me-pic" />
        <div>This is me at the Pyramids of Giza in Egypt!</div>
      </div>
    </div>
  );
}

export default About;
