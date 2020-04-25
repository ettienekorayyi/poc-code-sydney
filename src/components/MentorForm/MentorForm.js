import React, { useState, useContext } from 'react'
import './mentorform.css'
import { FaUserPlus } from 'react-icons/fa'
import MentorContext from '../../context/mentorContext/MentorContext'
import { FaFileUpload } from 'react-icons/fa'

const MentorForm = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const { newResource } = useContext(MentorContext)

  const [fullName, setFullName] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [ preview, setPreview] = useState('')

  const modalToggle = () => {
    setModalOpened(!modalOpened)
    setImage(null)
    setPreview('')
  }

  const onAddMentorSave = (newMentor) => {
    newResource(newMentor)
  }

  const removePhotoPreview = () => {
    setImage(null)
    setPreview('')
  }

  const onUploadPhoto = (e) => {
    const { files } = e.target
    setImage(files[0])
    setPreview(URL.createObjectURL(files[0]))
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
            {preview ? (
              <img
                className='preview-image'
                src={preview}
                alt='new-mentor-img'
                onClick={(e) => removePhotoPreview(e)}
              />
            ) : (
              <label className='img-label'>
                <FaFileUpload className='upload-icon' />
                <div className='upload-instructions'>Upload Mentor Photo</div>
                <input
                  type='file'
                  className='file-upload'
                  onChange={(e) => onUploadPhoto(e)}
                />
              </label>
            )}
          </div>

          {preview && (
            <div className='reupload-instructions'>
              To re-upload a new image, simply press image preview
            </div>
          )}
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
              onAddMentorSave({ image, fullName, title, description })
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
