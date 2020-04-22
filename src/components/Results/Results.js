import React, { useEffect, useContext } from 'react'
import './results.css'
import Card from '../Card/Card'
import MentorContext from '../../context/mentorContext/MentorContext'
import { Link } from 'react-router-dom'

const Results = () => {
  const { mentors, getMentors } = useContext(MentorContext)

  useEffect(() => {
    getMentors()
  }, [])

  return (
    <div className='results'>
      {mentors.map((mentor) => (
        <Link to={`/mentor/${mentor.id}`} key={mentor.id}>
          <Card
            id={mentor.id}
            key={mentor.id}
            photo={mentor.photo}
            fullName={mentor.fullName}
            title={mentor.title}
            description={mentor.description}
          />
        </Link>
      ))}
    </div>
  )
}

export default Results
