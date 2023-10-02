import React from "react"
import "./Navbar.css"
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar(){
    const [hamMenu, toggleHamMenu]=React.useState(false)
    
const navigate = useNavigate();

    function handleHamClick(){
        toggleHamMenu(old=>!old)
    }

    const [bigscreen, togglebigscreen] = React.useState(
        window.matchMedia("(min-width: 850px)").matches
      )
    
    React.useEffect(() => {
        window
        .matchMedia("(min-width: 850px)")
        .addEventListener('change', e => togglebigscreen( e.matches ));
      }, [bigscreen]);

    return(
        <nav className="NavbarComponents">
            <div className="menu-icon"
            onClick={handleHamClick}>
                 <i className={hamMenu? "fas fa-times": "fas fa-bars"}></i>
            </div>
            <ul className={hamMenu?'ham-menu-active':(bigscreen?'ham-menu-inactive':'ham-menu-invisible')}>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#home">Home</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#about">About</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#benefits">Benefits</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#responsibilities">Responsibilities</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <a className="navbar-links" href="/#contact">Contact Us</a>
                            </li>
                            </div>
                            <div className={hamMenu?"hamCont":""}>
                            <li>
                                <Link to="/register" className="apply-button" href="/#apply">Apply Now</Link>
                                {/* <button onClick={() => navigate("/register")}>Apply Now</button> */}
                            </li>
                            </div>
            </ul>
        </nav>
    )
}