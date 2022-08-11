import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__logo">
        <Link to='/' className='header__link'><h4>Where in the World?</h4></Link>
      </div>

      <div className="logo__mode">
          <i className="fa-solid fa-moon"></i> Dark Mode
      </div>
    </div>
  )
}

export default Header