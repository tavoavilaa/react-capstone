import React from 'react'
import { Link } from "react-router-dom";
import hero from '../img/hero.jpg'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
        <div>
          <h1 className='header__title'>Little Lemon</h1>
          <h4>Chicago</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            ipsa, repellendus sapiente exercitationem quam debitis praesentium
            magnam dignissimos quidem similique!
          </p>
          <Link to={"/booking"} role="button">
            Reserve a table
          </Link>
        </div>
        <div className='hero'>
          <img
            className='header__img'
            src={hero}
            alt="hero"
          />
        </div>
      </header>
  )
}

export default Header