import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='search'>
      <div className='form-wrapper'>
        <div className='select-box'>
          <select>
            <option value='name'>Name</option>
            <option value='title'>Title</option>
          </select>
        </div>
        <div className='search-bar'>
          <input type='text' />
        </div>
      </div>

      <div className='search-button'>
        <button className='button'>Search</button>
      </div>
    </div>
  )
}

export default Search
