import React, { useReducer } from 'react'
import MentorContext from './MentorContext'
import MentorReducer from './MentorReducer'
import api from '../../api/mentors-api'
import { GET_MENTOR, GET_MENTORS, MENTORS_ERROR } from '../types'

const MentorState = (props) => {
  const initialState = {
    mentor: {},
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

  const getMentor = (id) => {
    return api
      .get(`/v1/mentors/${id}`)
      .then((response) => {
        dispatch({ type: GET_MENTOR, payload: response.data.data.mentor })
      })
      .catch((err) => {
        dispatch({ type: MENTORS_ERROR, payload: err })
      })
  }

  return (
    <MentorContext.Provider
      value={{
        mentors: state.mentors,
        mentor: state.mentor,
        getMentor,
        getMentors,
      }}
    >
      {props.children}
    </MentorContext.Provider>
  )
}

export default MentorState
