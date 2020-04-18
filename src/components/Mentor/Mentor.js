import React from 'react'
import './mentor.css'
import Engramar from '../../assets/engramar.png'
import { MdLocationOn } from 'react-icons/md'

const Mentor = () => {
  return (
    <div className='mentor'>
      <div className='profile'>
        <img src={Engramar} className='mentor-photo' alt='Engramar' />
        <div className='mentor-name'>Engramar B</div>
        <div>Software Engineer</div>
        <div>
          <MdLocationOn className='location-marker' />
          <span className='mentor-location'>Sydney, NSW</span>
        </div>
      </div>
    </div>
  )
}

export default Mentor
