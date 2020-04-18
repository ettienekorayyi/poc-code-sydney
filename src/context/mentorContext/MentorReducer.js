const MentorReducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        mentors: action.payload,
        error: ''
      }
    case 'ERROR':
      return {
        data: action.payload,
        error: action.error
      }
    default:
      return state
  }
}

export default MentorReducer
