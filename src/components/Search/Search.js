import React, { useContext, useState, useEffect } from 'react'
import './search.css'
import MentorContext from '../../context/mentorContext/MentorContext';
import { DropDownOptions } from '../../commons/utility';
import { OPTION_NAME } from '../../context/types';

const Search = () => {
  const {
    mentors, getMentor, getMentors, filteredResource,
    filteredMentors, setNotifier
  } = useContext(MentorContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [dropDown, setDropDownOption] = useState(OPTION_NAME);
  const [textBoxState, setTextBoxState] = useState(true);
  const [textBoxInput, setTextBoxInput] = useState('');

  useEffect(() => {
    getMentors();
  }, [searchTerm, dropDown]);

  const onSearchSubmit = () => {
    if (textBoxState === false) {
      //setFilteredMentors(DropDownOptions({ dropDown, mentors, searchTerm }));
      filteredResource(DropDownOptions({ dropDown, mentors, searchTerm }));
      setNotifier(true);
      filteredMentors.map(fm => getMentor(fm.id));
      unHide();
    }
  };

  const unHide = () => {
    document.getElementById('result').removeAttribute("hidden");
  }

  const onSearchTermChange = (e) => {
    let { value } = e.target;
    setSearchTerm(value);
    setTextBoxInput(value);
    setTextBoxState(false);
  };

  const handleChange = (e) => {
    let { value } = e.target;
    setDropDownOption(value)
  }

  onkeydown = (e) => {
    let { keyCode } = e;

    if (keyCode === 8 && textBoxInput.length === 0) {
      filteredResource([]);
      setNotifier(false);
      setTextBoxState(true);
    }
    if (keyCode === 13) {
      onSearchSubmit();
    }
  }

  return (
    <div className='search'>
      <div className='form-wrapper'>
        <div className='select-box'>
          <select className='input-style' onChange={handleChange}>
            <option value='name'>Name</option>
            <option value='title'>Title</option>
          </select>
        </div>
        <div className='search-bar'>
          <input type='text' className='input-style' onChange={e => onSearchTermChange(e)} />
        </div>
      </div>

      <div className='search-button'>
        <button className='button' onClick={() => onSearchSubmit()} disabled={textBoxState} >Search</button>
      </div>

      <div className='results-section' href="#" id="result" hidden>
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
