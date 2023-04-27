import '../App.css';

import AboutMePic from "../Assets/aboutmepic.jpg";

const About = () => {
  return (
    <div className="sub-content about">
      <div className="about-content about-bio">
        <h2>Hi, I'm Sury</h2>
        <p> I'm a UX/UI designer with a background in frontend development.</p>
        <p>As a designer and developer, I'm interested in creating experiences that are intuitive, impactful, and aesthetically pleasing.</p>
        <p>I am based in Los Angeles and outside of work I am often painting, spending time with my dog, or discussing movies with my friends. I travel whenever I can and am inspired by the different places I've visited.</p>

        <div className="contact">
          <div><a href="mailto:suryvlobos@gmail.com">suryvlobos@gmail.com</a></div>
          <div><a href="https://www.linkedin.com/in/sarahivillalobos/" target="_blank" rel="noreferrer">LinkedIn</a></div>
          <div><a href="https://dribbble.com/sury_villalobos" target="_blank" rel="noreferrer">Dribbble</a></div>
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
