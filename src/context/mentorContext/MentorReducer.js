import { GET_MENTOR, GET_MENTORS, MENTORS_ERROR, DELETE_MENTOR, DELETED_MENTOR_ERROR, POST_MENTOR } from '../types'

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
        photo: photo
      }
    case DELETE_MENTOR:
      return {
        ...state,
        mentor: state.mentors.filter(mentor => mentor.id.includes(payload)),
        error: null,
      }
    case MENTORS_ERROR:
      return {
        ...state,
        error: payload,
      }
    case DELETED_MENTOR_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}

export default MentorReducer
