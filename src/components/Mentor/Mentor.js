import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './mentor.css'
import { MdLocationOn, MdAccountCircle } from 'react-icons/md'
import { location } from '../../constants'
import MentorContext from '../../context/mentorContext/MentorContext'
import PlaceHolderImage from '../../assets/placeholder_image.png'
import Loading from '../Loading'


const Mentor = () => {
  const { mentor, getMentor, isLoading,deleteMentor } = useContext(MentorContext)
  const { id } = useParams()
  const photoURL = `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${id}.png`

  useEffect(() => {
    getMentor(id)
  }, [id])

  const mentorLocation = location[Math.floor(Math.random() * location.length)]
  const mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${mentorLocation},AU&zoom=15&size=400x250&maptype=roadmap&markers=color:red%7Clabel:M%7C${mentorLocation},AU&key=AIzaSyBHiJzh1hfL8oF9mbYKc8p3lZieUVbPFck`

  return (
    <div className='mentor'>
      {isLoading ? (
        <Loading />
      ) : (
        <div className='profile'>
          <img
            src={mentor.photo ? photoURL : PlaceHolderImage}
            className='mentor-photo'
            alt='mentor profile'
          />
          <div className='mentor-name'>{mentor.fullName}</div>
          <div>{mentor.title}</div>
          <div className='location'>
            <MdLocationOn className='location-marker' />
            {mentorLocation}, Australia
          </div>

          <div className='action-buttons'>
            <button className='btn'>Edit</button>
            <button className='btn delete' onClick={() => { deleteMentor(id) } } >Delete</button>
          </div>

          <div className='panel'>
            <div className='panel-header'>
              <div className='panel-location'>
                <MdLocationOn />
              </div>
              <div className='panel-location-text'>Location</div>
            </div>
            <div className='panel-content'>
              <img src={mapURL} className='map' alt='map' />
            </div>
          </div>

          <div className='panel'>
            <div className='panel-header'>
              <div className='panel-location'>
                <MdAccountCircle />
              </div>
              <div className='panel-location-text'>Description</div>
            </div>
            <div className='panel-content mentor-description'>
              {mentor.description}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Mentor
