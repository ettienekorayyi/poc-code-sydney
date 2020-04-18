import React from 'react'
import './mentor.css'
import Engramar from '../../assets/engramar.png'
import { MdLocationOn } from 'react-icons/md'
import { location } from '../../constants'

const Mentor = () => {
  const mentorLocation = location[Math.floor(Math.random() * location.length)]
  const mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${mentorLocation},AU&zoom=15&size=400x250&maptype=roadmap&markers=color:red%7Clabel:M%7C${mentorLocation},AU&key=AIzaSyBHiJzh1hfL8oF9mbYKc8p3lZieUVbPFck`

  return (
    <div className='mentor'>
      <div className='profile'>
        <img src={Engramar} className='mentor-photo' alt='Engramar' />
        <div className='mentor-name'>Engramar B</div>
        <div>Software Engineer</div>
        <div className='location'>
          <MdLocationOn className='location-marker' />
          {mentorLocation}, Australia
        </div>

        <div className='panel'>
          <div className='panel-header'>
            <div className='panel-location'>
              <MdLocationOn />
            </div>
            <div className='panel-location-text'>Location</div>
          </div>
          <div className='panel-content'>
            <img src={mapURL} className='map' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentor
