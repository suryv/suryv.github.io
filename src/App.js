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
          Designed and built by Sury Villalobos
        </div>
    </div>
    
  );
}

export default App;
