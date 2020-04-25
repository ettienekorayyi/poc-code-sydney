import React, { useState } from 'react'
import './deleteconfirmation.css'

const DeleteConfirmation = () => {
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
    <div>
      <button className='delete-button delete-background' onClick={modalToggle}>
        Delete
      </button>

      <div className={containerClass}>
        ARE YOU FUCKING SURE THAT YOU WANT TO DELETE THIS FUCKING USER?
      </div>

      <div className={coverClass} onClick={modalToggle}></div>
    </div>
  )
}

export default DeleteConfirmation
