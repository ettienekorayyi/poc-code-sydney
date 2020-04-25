import React, { useContext } from 'react'
import './home.css'
import Results from '../Results'
import Search from '../Search'
import MentorForm from '../MentorForm'
import Error from '../Error/Error'
import MentorContext from '../../context/mentorContext/MentorContext'

const Home = () => {
  const { hasError } = useContext(MentorContext);

  return (
    <div className='home'>
      <MentorForm />
      <Search />
      { hasError ? <Error /> : <Results />}
    </div>
  )
}

export default Home
