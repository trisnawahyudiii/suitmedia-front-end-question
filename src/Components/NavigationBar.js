import React from "react";
import "../Styles/NavigationBar.css";

const NavigationBar = () => {
    return (
        <nav className="navbar-container">
            <h2>COMPANY</h2>
            <ul className="nav_link">
                <li className="nav-item nav-drop">
                    ABOUT
                    <ul className="dropdown">
                        <li className="dropdown-items">HISTORY</li>
                        <li className="dropdown-items">VISION MISSION</li>
                    </ul>
                </li>
                <li className="nav-item">OUR WORK</li>
                <li className="nav-item">OUR TEAM</li>
                <li className="nav-item">CONTACT</li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
