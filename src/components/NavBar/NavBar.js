import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClear } from 'react-icons/md'
import { FaSearch, FaUserPlus } from 'react-icons/fa'

const NavBar = () => {
  const [isHidden, setHidden] = useState(false)

  return (
    <div>
      <div className='navbar'>
        <div className='logo-section'>
          <img src={Logo} className='logo' alt='code sydney logo' />
        </div>
        <div className='navigation'>
          {!isHidden && (
            <GiHamburgerMenu
              className='icon'
              onClick={(e) => setHidden(true)}
            />
          )}
          {isHidden && (
            <MdClear className='close-icon' onClick={(e) => setHidden(false)} />
          )}
        </div>
      </div>
      {isHidden && (
        <div className='dropdown-menu'>
          <div className='dropdown-section'>
            <div className='dropdown-icon'>
              <FaSearch className='navigation-icon' />
            </div>
            <div className='dropdown-description'>Search</div>
          </div>
          <div className='dropdown-section'>
            <div className='dropdown-icon'>
              <FaUserPlus className='navigation-icon' />
            </div>
            <div className='dropdown-description'>Add New Mentor</div>
          </div>

          <div className='dropdown-section loggedin-user'>
            <div className='dropdown-icon'>
              <FaUserPlus className='navigation-icon' />
            </div>
            <div className='dropdown-description'>Engrammar B</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
