import React from 'react'
import './home.css'
import Results from '../Results'
import Search from '../Search'
import MentorForm from '../MentorForm'

const Home = () => {
  return (
    <div className='home'>
      <MentorForm />
      <Search />
      <Results />
    </div>
  )
}

export default Home
