import React, { useEffect, useContext } from 'react'
import MentorContext from '../../context/mentorContext/MentorContext' 
import './results.css'
import Card from '../Card/Card'

const Results = () => {
  const mentorContext = useContext(MentorContext);

  useEffect(() => {
    mentorContext.getMentors();
  }, []);

  return (
    <div>
      <h1>Results Component</h1>
      <Card />
    </div>
  )
}

export default Results
