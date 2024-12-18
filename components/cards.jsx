import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPerson, faUser } from '@fortawesome/free-solid-svg-icons'
import './card.css'
export default function Cards() {

    const [cards, setCards] = useState([]);
    const fetchdata = async () => {
        let a = await fetch('https://dummyjson.com/c/2022-1ca6-48b6-a668');
        let data = await a.json();
        setCards(data);
        console.log(data);
    }

    useEffect(() => {
        fetchdata();
    }, [])

    return (
        <div className="cards-container">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <div className="image">
                <Link>
                  <img src="src/assets/Main Thumbnail.png" alt="Card Thumbnail" />
                </Link>
              </div>
              <div className="info">
                <div className='titlebody'>
                <h2 className="title">{card.title}</h2>
                </div>
                <div className="details">
                  <FontAwesomeIcon className="icons" icon={faClock} />
                  <span id="user-name">{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }