import React, { useReducer, useState } from 'react'
import MentorContext from './MentorContext'
import MentorReducer from './MentorReducer'
import api from '../../api/mentors-api'
import { GET_MENTOR, GET_MENTORS, MENTORS_ERROR } from '../types'

const MentorState = (props) => {
  const initialState = {
<<<<<<< HEAD
    mentor: [],
    mentors: [],
    error: null,
=======
    mentors: [
      {
        id: '5e92aa3d3590ee30481dc673',
        title: 'Software Engineer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        fullName: 'Dorathy Ogden',
        photo: true,
      },
      {
        id: '5e92b22f3590ee30481dc6a5',
        title: 'Help Desk Technician',
        description:
          'Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Ac odio tempor orci dapibus ultrices. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Vestibulum morbi blandit cursus risus. Id velit ut tortor pretium viverra suspendisse potenti. Malesuada fames ac turpis egestas sed tempus. Id consectetur purus ut faucibus pulvinar elementum integer enim. Eu volutpat odio facilisis mauris sit amet. Euismod nisi porta lorem mollis aliquam ut. Suspendisse sed nisi lacus sed viverra. Duis tristique sollicitudin nibh sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.',
        fullName: 'Vestibulum morbi',
        photo: false,
      },
      {
        id: '5e92b22f3590ee30481dc6a6',
        title: 'Security Specialist',
        description:
          'Augue lacus viverra vitae congue eu consequat. Quis varius quam quisque id diam. Mauris augue neque gravida in fermentum et. Tristique senectus et netus et malesuada. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Ac odio tempor orci dapibus ultrices. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Vestibulum morbi blandit cursus risus. Id velit ut tortor pretium viverra suspendisse potenti. Malesuada fames ac turpis egestas sed tempus. Id consectetur purus ut faucibus pulvinar elementum integer enim. Eu volutpat odio facilisis mauris sit amet. Euismod nisi porta lorem mollis aliquam ut. Suspendisse sed nisi lacus sed viverra. Duis tristique sollicitudin nibh sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.',
        fullName: 'Alfred Caskey',
        photo: false,
      },
      {
        id: '5e92b1ca3590ee30481dc6a1',
        title: 'Network Engineer',
        description:
          'Enim diam vulputate ut pharetra. Cras ornare arcu dui vivamus. Scelerisque mauris pellentesque pulvinar pellentesque. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Integer feugiat scelerisque varius morbi enim nunc faucibus a. Velit aliquet sagittis id consectetur. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Est ullamcorper eget nulla facilisi etiam dignissim. Laoreet id donec ultrices tincidunt arcu non. Purus in mollis nunc sed id semper risus in hendrerit. Fusce id velit ut tortor pretium viverra. Massa enim nec dui nunc mattis enim ut tellus. Viverra accumsan in nisl nisi scelerisque eu ultrices. Turpis egestas pretium aenean pharetra magna. Maecenas accumsan lacus vel facilisis volutpat est velit.',
        fullName: 'Cathy Brundige',
        photo: true,
      },
      {
        title: 'Chief Information Officer (CIO)',
        description:
          'Mauris augue neque gravida in fermentum et. Tristique senectus et netus et malesuada. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Ac odio tempor orci dapibus ultrices. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Vestibulum morbi blandit cursus risus. Id velit ut tortor pretium viverra suspendisse potenti. Malesuada fames ac turpis egestas sed tempus. Id consectetur purus ut faucibus pulvinar elementum integer enim. Eu volutpat odio facilisis mauris sit amet. Euismod nisi porta lorem mollis aliquam ut. Suspendisse sed nisi lacus sed viverra. Duis tristique sollicitudin nibh sit amet. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.',
        fullName: 'Mason Kraemer',
        photo: false,
        id: '5e92b1fb3590ee30481dc6a3',
      },
      {
        title: 'Java Developer',
        description:
          'Gravida in fermentum et sollicitudin ac orci phasellus. Ut tellus elementum sagittis vitae et. ',
        fullName: 'Earlean Hilger ',
        photo: true,
        id: '5e92acb53590ee30481dc67c',
      },
    ],
>>>>>>> DEV-009 results/card skeleton and logic for user photo
  }

  const [isLoading, setIsLoading] = useState(true)

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
        setIsLoading(false)
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
        isLoading,
      }}
    >
      {props.children}
    </MentorContext.Provider>
  )
}

export default MentorState
