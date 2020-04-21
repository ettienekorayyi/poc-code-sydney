import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import Engramar from '../../assets/engramar.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClear, MdExitToApp } from 'react-icons/md'
import { FaSearch } from 'react-icons/fa'

const NavBar = () => {
  const [isHidden, setHidden] = useState(false)

  return (
    <div>
      <div className='navbar'>
        <div className='logo-section'>
          <a href='/'>
            <img src={Logo} className='logo' alt='code sydney logo' />
          </a>
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
          <a href='/'>
            <div className='dropdown-section'>
              <div className='dropdown-icon'>
                <FaSearch className='navigation-icon' />
              </div>
              <div className='dropdown-description'>Search</div>
            </div>
          </a>
          <div className='dropdown-section'>
            <div className='dropdown-icon'>
              <MdExitToApp className='navigation-icon' />
            </div>
            <div className='dropdown-description'>Logout</div>
          </div>

          <div className='dropdown-section loggedin-user'>
            <div className='dropdown-icon'>
              <img src={Engramar} className='avatar' alt='Engramar' />
            </div>
            <div className='engramar'>Engrammar B</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
