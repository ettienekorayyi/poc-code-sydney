import { GET_MENTORS, MENTORS_ERROR } from '../types'

const MentorReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_MENTORS:
      return {
        ...state,
        mentors: payload,
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
