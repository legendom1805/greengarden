import { NavLink } from 'react-router-dom'
import './sidenav.css'

import React from 'react'

export default function Sidenav({ toggle, closeNav }) {
    return (
        <div className={`side-nav ${toggle ? 'visible' : 'hidden'}`}>
            <ul className="list-side">
                <li className="list-items-side">
                    <NavLink className="items-side" to="/">Home</NavLink>
                </li>
                <li className="list-items-side">
                    <NavLink className="items-side" to="/about">About us</NavLink>
                </li>
                <li className="list-items-side">
                    <NavLink className="items-side" to="/privacy">Privacy Policy</NavLink>
                </li>
                <li className="list-items-side">
                    <NavLink className="items-side" to="/disclaimer">Disclaimer</NavLink>
                </li>
            </ul>
            <button className="close-btn" onClick={closeNav}>Close</button>
        </div>
    )
}
