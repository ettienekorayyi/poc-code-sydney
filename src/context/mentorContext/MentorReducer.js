import { GET_MENTOR, GET_MENTORS, MENTORS_ERROR, POST_MENTOR } from '../types'

const MentorReducer = (state, { type, payload, photo }) => {
  switch (type) {
    case GET_MENTOR:
      return {
        ...state,
        mentor: payload,
        error: null,
      }
    case GET_MENTORS:
      return {
        ...state,
        mentors: payload,
        error: null,
      }
    case POST_MENTOR:
      return {
        ...state,
        mentor: payload,
        photo: photo,
        error: null,
      }
    case MENTORS_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

export default MentorReducer
