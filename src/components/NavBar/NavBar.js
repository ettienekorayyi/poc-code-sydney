import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='logo-section'>
        <img src={Logo} className='logo' alt='code sydney logo' />
      </div>
      <div className='navigation'>
        <GiHamburgerMenu className='icon' />
      </div>
    </div>
  )
}

export default NavBar
