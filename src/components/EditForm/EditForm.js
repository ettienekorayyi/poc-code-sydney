import React, { useState,useContext } from 'react'
import MentorContext from '../../context/mentorContext/MentorContext'
import './editform.css'
import { useParams } from 'react-router-dom'

const EditForm = ({ mentor, placeholderImage, photoURL }) => {
  const [modalOpened, setModalOpened] = useState(false)
  const { editMentor } = useContext(MentorContext)
  const id = useParams();
  const [fullName, setFullName] = useState(mentor.fullName)
  const [title, setTitle] = useState(mentor.title)
  const [description, setDescription] = useState(mentor.description)

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
            <img
              className='preview-image'
              src={mentor.photo ? photoURL : placeholderImage}
              alt='new-mentor-img'
            />
          </div>
          <input
            type='text'
            placeholder='Full Name'
            className='mentor-edit-input'
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
          <input
            type='text'
            placeholder='Position'
            className='mentor-edit-input'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            type='text'
            placeholder='Description'
            className='mentor-edit-textarea'
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div className='modal-btn'>
          <button 
            className='modal-action-btn' 
            onClick={ () => { editMentor(id.id, title, description, fullName)} }>Save</button>
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
