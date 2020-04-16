import React from 'react'
import './home.css'
import NavBar from '../NavBar'
import Results from '../Results'
import Search from '../Search'

const Home = () => {
  return (
    <div>
      <NavBar />
      <Search />
      <Results />
    </div>
  )
}

export default Home
