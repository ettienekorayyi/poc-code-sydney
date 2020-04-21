import React, { useState } from 'react'
import './mentorform.css'
import { FaUserPlus } from 'react-icons/fa'

const MentorForm = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const modalToggle = () => {
    setModalOpened(!modalOpened)
  }

  const coverClass = modalOpened
    ? 'modal-cover modal-cover-active'
    : 'modal-cover'
  const containerClass = modalOpened
    ? 'modal-container modal-container-active'
    : 'modal-container'

  return (
    <div>
      <div className='add-mentor-icon'>
        <FaUserPlus onClick={modalToggle} />
      </div>

      <div className={containerClass}>
        <div className='modal-header'></div>
        <div className='modal-body'></div>
        <div className='modal-footer'></div>
      </div>

      <div className={coverClass} onClick={modalToggle}></div>
    </div>
  )
}

export default MentorForm
