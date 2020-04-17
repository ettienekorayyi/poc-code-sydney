import React, { useReducer, useEffect, useState } from 'react'
import api from '../../api/mentors-api'
import MentorContext from './MentorContext'
import MentorReducer from './MentorReducer'
import Mentor from '../../components/Mentor'

const MentorState = (props) => {
  let initialState = { mentors: [] }
  const [mentors, setMentors] = useState([])

  useEffect(() => {
    api
      .get('/v1/mentors')
      .then((res) => {
        setMentors(res.data.data.mentors)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const [state, dispatch] = useReducer(MentorReducer, initialState)

  return (
    <MentorContext.Provider value={mentors}>
      <Mentor />
    </MentorContext.Provider>
  )
}

export default MentorState
