import React from 'react'
import './desktop.css'
import Logo from '../../assets/logo.png'

const Desktop = () => {
  return (
    <div className='desktop'>
      <img src={Logo} alt='Code Sydney Logo' className='code-sydney-asset' />
      <div className='message-view'>
        This application is intentionally designed for only mobile view only.
      </div>
    </div>
  )
}

export default Desktop
