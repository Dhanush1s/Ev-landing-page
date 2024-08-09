
import { useState } from "react"
import './Navbar.css'
const navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-logo">EV-olution</div>     
      <ul className="nav-menu">
        <li>HOME</li>
        <li>EXPLORE</li>
        <li>ABOUT</li>
        <li className='nav-contact'>CONTACT</li>
      </ul> 
    </div>
  )
}

export default navbar