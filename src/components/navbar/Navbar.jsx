import React, {useState} from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <ul>
        <li>
            <NavLink
            to = "/"
            className={({ isActive }) => (isActive ? 'navbar-link-active' : '')}
            >
              <span>Home</span>

            </NavLink>
        </li>
        <li>
            <NavLink
            to = "about"
            className={({ isActive}) => (isActive ? 'navbar-link-active' : '')}
            >
              <span>about</span>
            </NavLink>
        </li>
      </ul>
      
     </nav>
    </>
  )
}

export default Navbar
