import React from 'react'
import logo from '../img/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href="/"><img className='logo__navbar' src={logo} alt="" /></a>
        <ul className='navbar__list'>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/"> Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar