import React from 'react'
import { Link } from "react-router-dom";
import logo from '../img/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href="/"><img className='logo__navbar' src={logo} alt="" /></a>
        <ul className='navbar__list'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/menu"}>Menu</Link>
          </li>
          <li>
            <Link to={"/booking"}> Reservations</Link>
          </li>
          <li>
            <Link to={"/order"}>Order Online</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
    
      </nav>
  )
}

export default Navbar