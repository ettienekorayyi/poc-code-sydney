import React, { useReducer } from 'react'
import MentorContext from './MentorContext'
import MentorReducer from './MentorReducer'
import api from '../../api/mentors-api'

const MentorState = (props) => {
  const initialState = {
    mentors: [],
    error: '',
  }

  const [state, dispatch] = useReducer(MentorReducer, initialState)

  const getMentors = () => {
    return api
      .get('/v1/mentors/')
      .then((response) => {
        dispatch({ type: 'SUCCESS', payload: response.data.data.mentors })
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', error: err })
      })
  }

  return (
    <MentorContext.Provider value={{ mentors: state.mentors, getMentors }}>
      {props.children}
    </MentorContext.Provider>
  )
}

export default MentorState
