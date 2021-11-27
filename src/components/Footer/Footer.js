import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Blizzard_Logo.svg.png';
import './Footer.css';

const Footer =() => {
    return (
        <div className="footer-content">
            <footer className="text-white bg-black">
                <div>
                    <nav className="row">
                        <Link to="/" className="col-12 col-md3 d-flex align-items-center justify-content-center">
                            <img src={logo} className="mx-2 mt-4" alt="Blizzard logo" width="150"/>
                        </Link>
                        <nav>
                            <ul className="menu-container">
                                <li className="nav-item nav-Link"><a href="/" >CAREERS</a></li>
                                <li ><a href="/">ABOUT</a></li>
                                <li ><a href="/">SUPPORT</a></li>
                                <li ><a href="/">CONTACT US</a></li>
                                <li ><a href="/">PRESS</a></li>
                                <li ><a href="/">API</a></li>
                                <li ><a href="/">SITE MAP</a></li>
                            </ul>
                        </nav>
                        <div className="trademark">
                            <h2 className="text-app">All games, one app:</h2>
                        </div>
                        <div className="trademark-second">
                            <h3 className="text-app">©2021 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.</h3>
                            <h4 className="text-app">All trademarks referenced herein are the properties of their respective owners.</h4>
                        </div>
                        <nav>
                            <ul className="menu-container navbar-nav">
                                <li><a className="nav-item nav-Link" href="/privacy">PRIVACY</a></li>
                                <li><a className="nav-item nav-Link" href="/legal">LEGAL</a></li>
                                <li><a className="nav-item nav-Link" href="/terms">TERMS</a></li>
                                <li><a className="nav-item nav-Link" href="/cookiespolicy">COOKIE POLICY</a></li>
                                <li><a className="nav-item nav-Link" href="/cookiesettings">COOKIE SETTINGS</a></li>
                            </ul>
                        </nav>
                    </nav>
                </div>
            </footer>
        </div>
    );
}

export default Footer;