import React from 'react';
import './Footer.css';
import logo from '../images/myLogo.png';

const Footer = (props) => {
    return (
        <footer className="footer text-center">
            <div className="container">
                <p className="branding">CJ Innovations, Copyright © 2018 <img className="logo" src={logo} width="30" alt="logo" /></p>
            </div>
        </footer>
    )
};

export default Footer;