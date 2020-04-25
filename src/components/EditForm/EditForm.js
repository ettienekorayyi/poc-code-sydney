import React, { useState, useContext } from 'react'
import './editform.css'

const EditForm = () => {
  const [modalOpened, setModalOpened] = useState(false)

  const modalToggle = () => {
    setModalOpened(!modalOpened)
  }

  const coverClass = modalOpened
    ? 'edit-modal-cover edit-modal-cover-active'
    : 'modal-cover'
  const containerClass = modalOpened
    ? 'edit-modal-container edit-modal-container-active'
    : 'edit-modal-container'

  return (
    <>
      <button className='edit-button' onClick={modalToggle}>
        Edit
      </button>

      <div className={containerClass}>
        <div className='modal-body'>
          <div className='upload-section'>
            {/* <img className='preview-image' src={preview} alt='new-mentor-img' /> */}
          </div>
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
    </>
  )
}

export default EditForm
