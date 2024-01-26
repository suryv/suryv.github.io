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
// IMPORT THESE BACK WHEN READY TO SHOW WORK
import Portfolio from "./Components/Portfolio";
// import About from "./Components/About";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";
import UnderConstruction from "./Components/UnderConstruction";

// import Projects (IMPORT THESE BACK WHEN READY TO SHOW WORK)
// import LangApp from "./Components/Portfolio/LangApp";
// import StarbucksSharedPoints from "./Components/Portfolio/StarbucksSharedPoints";
// import UIWork from "./Components/Portfolio/UIWork";

// import to ScrollToTop. Important for React Router bc it opens to place in instant of component
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};



function App() {
  return (
    <div className="main-content">
        <Router> 
          <ScrollToTop>
            <Header/>
            <Routes>
              {/* ADD THIS BACK WHEN READY. DELETE THE ONE BELOW SHOWING UNDER CONSTRUCTION */}
              {/* <Route path="/Portfolio" element={<Portfolio/>} />
                <Route path="/Portfolio/StarbucksSharedPoints" element={<StarbucksSharedPoints />} /> 
                <Route path="/Portfolio/LangApp" element={<LangApp />} /> 
                <Route path="/Portfolio/UIWork" element={<UIWork />} /> 
              <Route path="/About" element={<About/>} />
              <Route from="/" element={<Portfolio/>}/>
              <Route exact path="/" element={<Navigate to="/Portfolio"/>} /> */}
              {/* DELETE THE UNDERCONSTRUCTION ROUTES AND ADD BACK IN THE ONES ABOVE */}
              <Route path="/Portfoliod" element={<UnderConstruction/>} />
              <Route path="/UnderConstruction" element={<UnderConstruction/>} />
              <Route from="/" element={<UnderConstruction/>}/>
              <Route exact path="/" element={<Navigate to="/UnderConstruction"/>}/>
              <Route path='/404' element={<PageNotFound/>} />
              <Route path='*' element={<Navigate replace to='/404'/>} />
            </Routes>
          </ScrollToTop>      
        </Router>
        <Footer />
    </div>
    
  );
}

export default App;
