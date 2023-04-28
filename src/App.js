import './App.css';

// Router for Nav
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

//Import pages for Router
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound"

// import Projects
import LangApp from "./Components/Portfolio/LangApp"
import StarbucksSharedPoints from "./Components/Portfolio/StarbucksSharedPoints"

function App() {
  return (
    <div className="main-content">
        <Router> 
          <Header/>
          <Routes>
            <Route path="/Portfolio" element={<Portfolio/>} />
              <Route path="/Portfolio/StarbucksSharedPoints" element={<StarbucksSharedPoints />} /> 
              <Route path="/Portfolio/LangApp" element={<LangApp />} /> 
            <Route path="/About" element={<About/>} />
            <Route from="/" element={<Portfolio/>}/>
            <Route exact path="/" element={<Navigate to="/Portfolio"/>} />
            <Route path='/404' element={<PageNotFound/>} />
            <Route path='*' element={<Navigate replace to='/404'/>} />
          </Routes>
        </Router>
        <Footer />
    </div>
    
  );
}

export default App;
