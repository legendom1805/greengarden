import React from 'react'
import './home.css'
import Cards from './cards'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPerson, faUser } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <div id='parent-div'>
      <div id="img">
        <img id="banner" src="GGLogowhite.png" />
      </div>

      <div className="featured-card">
        <div className="img-container">
          <Link>
            <img src='Main Thumbnail.png' />
          </Link>
        </div>
        <div className="post-info">
          <h2 className="post-title">How I started gardening ?</h2>
          <div className="post-details">
            <FontAwesomeIcon className='icons' icon={faUser} />
            <span id="user-name">Green Garden</span>
            <FontAwesomeIcon className='icons' icon={faClock} />
            <span id="date">Date</span>
          </div>

          <span className="post-content">How I started gardening ?</span>
        </div>

      </div>

      <div className="recentpost">
        <h2 id="recent">RECENT POSTS</h2>
      </div>

      <div className="cards">
        <Cards />
      </div>


    </div>
  )
}

