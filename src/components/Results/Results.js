import React, { useEffect, useContext } from 'react'
import './results.css'
import Card from '../Card/Card'
import MentorContext from '../../context/mentorContext/MentorContext'
import { Link } from 'react-router-dom'
import Loading from '../Loading'
import NoResults from '../NoResults'

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

  const searchResultRender = () => {
    if (notifier === false && filteredMentors.length === 0) {
      return <h4>Mentors Counter: {mentors.length}</h4>
    } else if (notifier === true && filteredMentors.length === 0) {
      return <NoResults />
    }
  }

  return (
    <div className='results'>
      {isLoadingResult ? (
        <Loading />
      ) : (
        <div className='result-iterator'>
          {searchResultRender()}
          {iterator()}
        </div>
      )}
    </div>
  )
}

export default Results
