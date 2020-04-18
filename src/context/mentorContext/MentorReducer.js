const MentorReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        mentors: action.payload,
        error: ''
      }
    case 'ERROR':
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default MentorReducer
