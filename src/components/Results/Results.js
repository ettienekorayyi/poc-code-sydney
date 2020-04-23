import React, { useEffect, useContext } from 'react'
import './results.css'
import Card from '../Card/Card'
import MentorContext from '../../context/mentorContext/MentorContext'
import { Link } from 'react-router-dom'
import Loading from '../Loading'

const Results = () => {
  const {
    mentors,
    getMentors,
    filteredMentors,
    notifier,
    isLoadingResult,
  } = useContext(MentorContext)

  useEffect(() => {
    getMentors()
  }, [])

  const iterator = () => {
    if (notifier === true) {
      return filteredMentors.map((mentor) => (
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
      ))
    } else if (notifier === false) {
      return mentors.map((mentor) => (
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
      ))
    }
  }

  return (
    <div className='results'>
      {isLoadingResult ? (
        <Loading />
      ) : (
        <div className='result-iterator'>
          {filteredMentors.length === 0 && (
            <h5>Mentors Counter: {mentors.length}</h5>
          )}
          {iterator()}
        </div>
      )}
    </div>
  )
}

export default Results
