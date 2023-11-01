
import './App.css';
import Navbar from "./Components/Navbar.js"
import Hero from "./Components/Hero.js"
import About from "./Components/About.js"
import WhyApply from './Components/WhyApply';
import Roles from './Components/Roles.js'
import Contact from './Components/Contact.js'
import Registration from './Components/Registration.js';
import Thousand from './Components/Thousand.js'
import WhoApply from './Components/WhoApply.js';
import WithLove from './Components/WithLove.js';

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Home.js"


function App() {
  return (
    
      <div className="App">
        {/* <Routes>
        <Route path="/" element={<div><Home /> */}
                                {/* <Hero /> */}
                                {/* <About /> */}
                                {/* <Thousand /> */}
                                {/* <WhyApply />
                                <Roles />
                                <Contact /> */}
                                {/* <WhoApply /> */}
                              
                                {/* <WithLove /> */}
                                
                                {/* </div>}> */}
        {/* <Route path="/register" element={<Registration />} /> */}
        {/* </Route>
        </Routes> */}
        <Home />
        

      </div>
    
  );
}

export default App;
