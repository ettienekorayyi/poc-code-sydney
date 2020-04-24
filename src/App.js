import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MentorState from './context/mentorContext/MentorState'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Mentor from './components/Mentor'
import Desktop from './components/Desktop'

const App = () => {
  return (
    <MentorState>
      <div className='app'>
        <NavBar />
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/mentors' component={Home} />
          <Route path='/mentor/:id' component={Mentor} />
        </Router>
      </div>
      <div className='desktop-view'>
        <Desktop />
      </div>
    </MentorState>
  )
}

export default App
