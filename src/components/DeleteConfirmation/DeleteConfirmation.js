import React, { useState } from 'react'
import './deleteconfirmation.css'
import { MdWarning } from 'react-icons/md'

const DeleteConfirmation = ({ mentorName }) => {
  const [modalOpened, setModalOpened] = useState(false)

  const modalToggle = () => {
    setModalOpened(!modalOpened)
  }

  const coverClass = modalOpened
    ? 'delete-modal-cover delete-modal-cover-active'
    : 'delete-modal-cover'
  const containerClass = modalOpened
    ? 'delete-modal-container delete-modal-container-active'
    : 'delete-modal-container'

  return (
    <>
      <button
        className='general-button delete-background'
        onClick={modalToggle}
      >
        Delete
      </button>

      <div className={containerClass}>
        <div>
          {' '}
          <MdWarning className='warning-icon' />
        </div>
        <div>
          Are you sure you want to delete{' '}
          <span className='deleted-mentor-name'>{mentorName}</span>?
        </div>

        <div className='deleted-action-group'>
          <button className='general-button delete-background'>Confirm</button>
          <button className='general-button cancel-button'>Cancel</button>
        </div>
      </div>

      <div className={coverClass} onClick={modalToggle}></div>
    </>
  )
}

export default DeleteConfirmation
