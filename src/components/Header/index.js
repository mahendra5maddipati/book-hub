import React, {useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import {Link} from 'react-router-dom'

// import Cookies from 'js-cookie'

import './index.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <div className="nav-container">
      <img
        src="https://res.cloudinary.com/dq6xf1yud/image/upload/v1744073435/logo_d9z1zi.png"
        alt="logo"
        className="website-logo-header"
      />
      <div className="menu-container">
        <button type="button" className="menu-button" onClick={toggleMenu}>
          <FiMenu />
        </button>

        {isMenuOpen && (
          <ul className="menu-items">
            <li className="items">
              <Link to="/">Home</Link>
            </li>
            <li className="items">
              <Link to="bookshelves">Bookshelves</Link>
            </li>
            <li className="items">
              <Link to="Logout">Logout</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header
