import React, { useReducer } from 'react'
import MentorContext from './MentorContext'
import MentorReducer from './MentorReducer'
import api from '../../api/mentors-api'
import { GET_MENTORS, MENTORS_ERROR } from '../types'

const MentorState = (props) => {
  const initialState = {
    mentors: [],
    error: null,
  }

  const [state, dispatch] = useReducer(MentorReducer, initialState)

  const getMentors = () => {
    return api
      .get('/v1/mentors/')
      .then((response) => {
        dispatch({ type: GET_MENTORS, payload: response.data.data.mentors })
      })
      .catch((err) => {
        dispatch({ type: MENTORS_ERROR, payload: err })
      })
  }

  return (
    <MentorContext.Provider value={{ mentors: state.mentors, getMentors }}>
      {props.children}
    </MentorContext.Provider>
  )
}

export default MentorState
