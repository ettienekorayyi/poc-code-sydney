import React from 'react'
import './search.css'

const Search = () => {
  return (
    <div className='search'>
      <div className='form-wrapper'>
        <div className='select-box'>
          <select className='input-style'>
            <option value='name'>Name</option>
            <option value='title'>Title</option>
          </select>
        </div>
        <div className='search-bar'>
          <input type='text' className='input-style' />
        </div>
      </div>

      <div className='search-button'>
        <button className='button'>Search</button>
      </div>

      <div className='results-section'>
        <h2>Search Results</h2>
        <div className='search-results'>
          We found <strong className='result'>10 mentors</strong> matching your
          search.
        </div>
      </div>
    </div>
  )
}

export default Search
