import React from 'react'
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
    return (
        <div id="main" >
            <nav className="first-nav">
                <div className="nav">
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
                    {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}


                </div>
            </nav >
        </div >

    )
}
