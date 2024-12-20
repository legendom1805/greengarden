import { NavLink } from 'react-router-dom'
import './sidenav.css'
import { useRef } from 'react'
import React from 'react'

export default function Sidenav({ toggle, closeNav }) {
    
    return (
        
        <div className={`side-nav ${toggle ? 'visible' : 'hidden'}`}>
            {console.log('Sidenav received toggle state:', toggle)}
            <ul className="list-side">
                <li className="list-items-side" onClick={closeNav}>
                    <NavLink className="items-side" to="/">Home</NavLink>
                </li>
                <li className="list-items-side" onClick={closeNav}>
                    <NavLink className="items-side" to="/about">About us</NavLink>
                </li>
                <li className="list-items-side" onClick={closeNav}>
                    <NavLink className="items-side" to="/privacy">Privacy Policy</NavLink>
                </li>
                <li className="list-items-side" onClick={closeNav}>
                    <NavLink className="items-side" to="/disclaimer">Disclaimer</NavLink>
                </li>
            </ul>
            <button className="close-btn" onClick={closeNav}>Close</button>
        </div>
    )
}
