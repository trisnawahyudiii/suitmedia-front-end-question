import React from "react";
import "../Styles/Footer.css";
import facebook from "../Assets/img/facebook-official.png";
import twitter from "../Assets/img/twitter.png";

const Footer = () => {
    return (
        <div className="footer-container">
            <h5>Dibuat Dengan Cinta di Bukit Jimbaran, Bali 💕</h5>
            <div className="icons">
                <img src={facebook} alt="facebook-icon" />
                <img src={twitter} alt="twitter-icon" />
            </div>
        </div>
    );
};

export default Footer;
