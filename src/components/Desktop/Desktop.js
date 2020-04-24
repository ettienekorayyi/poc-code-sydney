import React from 'react'
import './desktop.css'
import Logo from '../../assets/logo.png'

const Desktop = () => {
  return (
    <div className='desktop'>
      <img src={Logo} alt='Code Sydney Logo' className='code-sydney-asset' />
      <h1>HERE IS THE DESKTOP VIEW</h1>
    </div>
  )
}

export default Desktop
