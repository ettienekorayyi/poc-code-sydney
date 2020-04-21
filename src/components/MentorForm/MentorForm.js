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
        <div className='modal-body'>
          <input type='text' placeholder='Full Name' className='mentor-input' />
          <input type='text' placeholder='Position' className='mentor-input' />
          <textarea
            type='text'
            placeholder='Description'
            className='mentor-textarea'
          />
        </div>
        <div className='modal-btn'>
          <button className='modal-action-btn'>Save</button>
          <button className='modal-action-btn cancel' onClick={modalToggle}>
            Cancel
          </button>
        </div>
      </div>

      <div className={coverClass} onClick={modalToggle}></div>
    </div>
  )
}

export default MentorForm
