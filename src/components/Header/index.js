import React, {useState} from 'react'
import {FiMenu} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = () => {
  const [sample, setSample] = useState('')

  return (
    <div className="nav-container">
      <img src="" alt="logo" className="website-logo" />
      <div className="menu-container">
        <button type="button">
          <FiMenu />
        </button>
      </div>
    </div>
  )
}

export default Header
