import React, { useContext } from 'react'
import './mentor.css'
import MentorContext from '../../context/MentorsContext';

const Mentor = () => {
  const mentors = useContext(MentorContext);
  console.log(mentors);
  return (
    <div>
      <h1>Mentor COMPONENT</h1>
      <ul>
        {mentors.map(mentor => (
          <li key={mentor.id}>{mentor.fullName}</li>
        ))}
      </ul>
    </div>
  )
}

export default Mentor




