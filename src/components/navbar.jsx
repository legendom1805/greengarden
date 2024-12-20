import React, { useEffect, useState, useRef } from 'react'
import './navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Sidenav from './sidenav'
export default function Navbar() {
    const [toggle, settoggle] = useState(false);

    const closeNav = () => {
        settoggle(false);
    };

    const handleToggle = (event) => {
        settoggle((prevState) => !prevState); // Toggle state correctly
        event.stopPropagation();
        console.log('Toggle state updated:', !toggle);
    };

    return (
        <div id="main">
            <nav className="first-nav">
                <div className="nav">
                    <div className="sidenavtoggle" onClick={handleToggle}>
                        <label htmlFor="checkbox" id="nav-toggle">
                            <div className="bars"></div>
                            <div className="bars"></div>
                            <div className="bars"></div>
                        </label>
                    </div>
                    <div id="logoname">
                        <img id="logo" src='android-chrome-192x192.png' />
                        <h6 id="title">Green Garden</h6>
                    </div>
                    <div id="search">
                        <FontAwesomeIcon id='btn-search' className="brand-icons" icon={faSearch} />
                    </div>

                </div>
            </nav>
            
            <nav className="sec-nav">
                <div className="nav">
                    <div className="links" >
                        <ul className="list">
                            <li className="list-items">
                                <NavLink className="items" to="/">Home</NavLink>
                            </li>
                            <li className="list-items">
                                <NavLink className="items" to="/about">About us</NavLink>
                            </li>
                            <li className="list-items">
                                <NavLink className="items" to="/privacy">Privacy Policy</NavLink>
                            </li>
                            <li className="list-items">
                                <NavLink className="items" to="/disclaimer">Disclaimer</NavLink>
                            </li>
                        </ul>
                    </div>
                    <ul className="list">
                        <li className="list-items">
                            <FontAwesomeIcon className="icon brand-icons" icon={faFacebook} />
                        </li>
                        <li className="list-items">
                            <FontAwesomeIcon className="icon brand-icons" icon={faWhatsapp} />
                        </li>
                        <li className="list-items">
                            <FontAwesomeIcon className="icon brand-icons" icon={faInstagram} />
                        </li>
                    </ul>


                </div>
            </nav >

            {toggle && (
                <div
                    className="modal-overlay" id="blur"
                    onClick={() => settoggle(false)}
                />
            )}
            <Sidenav toggle={toggle} closeNav={closeNav} />

        </div >

    )
}
