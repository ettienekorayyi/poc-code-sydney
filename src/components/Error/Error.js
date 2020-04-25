import React from 'react'
import '../Error'
import { AiOutlineClose } from 'react-icons/ai'

const Error = () => {
  return (
    <div className='no-results'>
      <AiOutlineClose size={40} color='red' style={{fontWeight: 'bold'}} className='error-result' />
      <div className='went-wrong'>Oops something went wrong,</div>
      <div className='sorry'>Sorry, no results found.</div>
      <div>later..</div>
    </div>
  )
}

export default Error
