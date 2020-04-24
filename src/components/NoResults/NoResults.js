import React from 'react'
import './noresults.css'
import { AiOutlineFileSearch } from 'react-icons/ai'

const NoResults = () => {
  return (
    <div className='no-results'>
      <AiOutlineFileSearch className='no-search-result' />
      <div className='miss'>That's a miss</div>
      <div className='apologies'>Sorry, no results found.</div>
      <div>Please try different criteria.</div>
    </div>
  )
}

export default NoResults
