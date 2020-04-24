import React from 'react'
import './desktop.css'
import Logo from '../../assets/logo.png'

const Desktop = () => {
  return (
    <div className='desktop'>
      <img src={Logo} alt='Code Sydney Logo' className='code-sydney-asset' />
      <div className='message-view'>
        This app is intentionally designed for mobile view only.
        <br />
        For the best experience, please view this app on your mobile device.
      </div>
    </div>
  )
}

export default Desktop
