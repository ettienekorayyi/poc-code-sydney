import React, { useEffect, useContext } from 'react'
import './results.css'
import Card from '../Card/Card'
import MentorContext from '../../context/mentorContext/MentorContext'

const Results = () => {
  const { mentors, getMentors } = useContext(MentorContext)

  useEffect(() => {
    getMentors()
  }, [])

  return (
    <div className='results'>
      {mentors.map((mentor) => (
        <Card
          id={mentor.id}
          key={mentor.id}
          photo={mentor.photo}
          fullName={mentor.fullName}
          title={mentor.title}
        />
      ))}
    </div>
  )
}

export default Results
