import React, { useReducer, useState } from 'react'
import MentorContext from './MentorContext'
import MentorReducer from './MentorReducer'
import api from '../../api/mentors-api'
import {
  GET_MENTOR,
  GET_MENTORS,
  MENTORS_ERROR,
  DELETED_MENTOR_ERROR,
  DELETE_MENTOR,
  POST_MENTOR,
} from '../types'

const MentorState = (props) => {
  const initialState = {
    mentor: [],
    mentors: [],
    error: null,
  }

  const [isLoading, setIsLoading] = useState(true)
  const [isLoadingResult, setIsLoadingResult] = useState(true)
  const [isLoadingRequest, setIsLoadingRequest] = useState(false)
  const [filteredMentors, setFilteredMentors] = useState([])
  const [hasError, setHasError] = useState(false)
  const [state, dispatch] = useReducer(MentorReducer, initialState)
  const [notifier, setNotifier] = useState(false)

  const getMentors = () => {
    return api
      .get('/v1/mentors/')
      .then((response) => {
        dispatch({ type: GET_MENTORS, payload: response.data.data.mentors })
        setIsLoadingResult(false)
        setHasError(false)
      })
      .catch((err) => {
        dispatch({ type: MENTORS_ERROR, payload: err })
        setHasError(true)
      })
  }

  const getMentor = (id) => {
    return api
      .get(`/v1/mentors/${id}`)
      .then((response) => {
        dispatch({ type: GET_MENTOR, payload: response.data.data.mentor })
        setIsLoading(false)
        setHasError(false)
      })
      .catch((err) => {
        dispatch({ type: MENTORS_ERROR, payload: err })
        setHasError(true)
      })
  }

  const postMentor = ({ image, title, description, fullName }) => {
    const data = new FormData()
    data.append('image', image)
    data.append('title', title)
    data.append('description', description)
    data.append('fullName', fullName)

    setIsLoadingRequest(true)

    return api
      .post('/v1/mentors/', data)
      .then((response) => {
        const mentorId = response.data.data.mentor.id

        window.location = `/mentor/${mentorId}`
        dispatch({
          type: POST_MENTOR,
          payload: response,
          photo: response.image.raw,
        })
        setIsLoadingRequest(false)
      })
      .catch((err) => {
        dispatch({ type: MENTORS_ERROR, payload: err })
      })
  }

  const newResource = (addedMentor) => {
    postMentor(addedMentor)
  }

  const deleteMentor = (id) => {
    return api
      .delete(`/v1/mentors/${id}`)
      .then(() => {
        window.location = `/`
        dispatch({ type: DELETE_MENTOR, payload: id })
      })
      .catch((err) => {
        dispatch({ type: DELETED_MENTOR_ERROR, payload: err })
      })
  }

  const filteredResource = (list) => {
    setFilteredMentors(list)
  }

  return (
    <MentorContext.Provider
      value={{
        mentors: state.mentors,
        mentor: state.mentor,
        filteredMentors,
        getMentor,
        getMentors,
        deleteMentor,
        filteredResource,
        setNotifier,
        newResource,
        hasError,
        notifier,
        isLoading,
        isLoadingResult,
        isLoadingRequest,
      }}
    >
      {props.children}
    </MentorContext.Provider>
  )
}

export default MentorState
