import React from 'react'
import './card.css'
import PlaceHolderImage from '../../assets/placeholder_image.png'

const Card = ({ id, fullName, title, photo, description }) => {
  const photoURL = `https://codesydney-website.s3-ap-southeast-2.amazonaws.com/mentor/${id}.png`

  return (
    <div className='card'>
      <img
        className='card-image'
        src={photo ? photoURL : PlaceHolderImage}
        alt='user-profile'
      />
      <div className='card-fullName'>{fullName}</div>
      <div className='card-title'>{title}</div>
      <div className='card-description'>
        {description.length < 70
          ? description
          : `${description.slice(0, 70)}...`}
      </div>
    </div>
  )
}

export default Card
