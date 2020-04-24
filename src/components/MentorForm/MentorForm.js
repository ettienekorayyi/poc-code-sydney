import React, { useState, useContext } from 'react'
import './mentorform.css'
import { FaUserPlus } from 'react-icons/fa'
import MentorContext from '../../context/mentorContext/MentorContext'

const MentorForm = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const { newResource } = useContext(MentorContext)

  const [fullName, setFullName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photo, setPhoto] = useState({ preview: '', raw: '' })

  const modalToggle = () => {
    setModalOpened(!modalOpened)
    setPhoto({
      preview: '',
      raw: '',
    })
  }

  const onAddMentorSave = (newMentor) => {
    newResource(newMentor)
  }

  const onUploadPhoto = (e) => {
    const { files } = e.target
    setPhoto({
      preview: URL.createObjectURL(files[0]),
      raw: files[0],
    })
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
          <div className='upload-section'>
            {photo.preview ? (
              <img
                className='preview-image'
                src={photo.preview}
                alt='new-mentor-img'
              />
            ) : (
              <input
                type='file'
                className='file-upload'
                onChange={(e) => onUploadPhoto(e)}
              />
            )}
          </div>
          <input
            type='text'
            placeholder='Full Name'
            className='mentor-input'
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Position'
            className='mentor-input'
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type='text'
            placeholder='Description'
            className='mentor-textarea'
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='modal-btn'>
          <button
            className='modal-action-btn'
            onClick={() =>
              onAddMentorSave({ photo, fullName, title, description })
            }
          >
            Save
          </button>
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
