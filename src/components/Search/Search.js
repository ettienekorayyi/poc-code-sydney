import React, { useContext, useState, useEffect } from 'react'
import './search.css'
import MentorContext from '../../context/mentorContext/MentorContext';
import {DropDownOptions} from '../../commons/utility';

const Search = () => {
  const { mentors, getMentor, getMentors } = useContext(MentorContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [dropDown, setDropDownOption] = useState("");

  useEffect(() => {
    getMentors();
    setFilteredMentors(DropDownOptions({dropDown, mentors, searchTerm}));
  }, [searchTerm, dropDown]);

  const onSearchSubmit = () => {
    filteredMentors.map(fm => getMentor(fm.id));
  };

  const handleChange = (e) => {
    let { value } = e.target;
    setDropDownOption(value)
  }

  return (
    <div className='search'>
      <div className='form-wrapper'>
        <div className='select-box'>
          <select onChange={ handleChange }>
            <option value=''>Select an Option</option>
            <option value='name' >Name</option>
            <option value='title'>Title</option>
          </select>
        </div>
        <div className='search-bar'>
          <input type='text' onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </div>

      <div className='search-button'>
        <button className='button' onClick={() => onSearchSubmit()} >Search</button>
      </div>

      <div className='results-section'>
        <h2>Search Results</h2>
        <div className='search-results'>
          We found <strong className='result'>{filteredMentors.length}</strong> matching your
          search.
        </div>
      </div>
    </div>
  )
}

export default Search
