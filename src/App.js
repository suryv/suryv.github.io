import './App.css';

// Router for Nav
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// import Nav Bar
import Header from "./Components/Header";
// import Portfolio component
import Portfolio from "./Components/Portfolio";
// import About component
import About from "./Components/About";
// import Contact component
import Contact from "./Components/Contact";

// import Projects
import LangApp from "./Components/Portfolio/LangApp"

function App() {
  return (
    <div className="main-content">
        <Router> 
          <Header/>
          <Routes>
            <Route path="/Portfolio" element={<Portfolio/>} />
              <Route path="/Portfolio/LangApp" element={<LangApp />} /> 
            <Route path="/About" element={<About/>} />
            {/* <Route path="/Contact" element={<Contact/>} /> */}
            <Route from="/" element={<Portfolio/>}/>
            <Route exact path="/" element={<Navigate to="/Portfolio"/>} />
          </Routes>
        </Router>
        <div className="footer">
          <div className="footer-contact">
            <div><a href="suryvlobos@gmail.com"></a>Email</div>
            <div>|</div>
            <div><a href="https://www.linkedin.com/in/sarahivillalobos/" target="_blank" rel="noreferrer">LinkedIn</a></div>
            <div>|</div>
            <div><a href="https://dribbble.com/sury_villalobos" target="_blank" rel="noreferrer">Dribble</a></div>
          </div>
          <div>Designed and built by Sury Villalobos</div>
        </div>
    </div>
    
  );
}

export default App;
