const MentorReducer = (state, action) => {
  switch (action.type) {
    case 'GET_ALL':
      return state.mentors.map((result) => {
        return result
      })
    default:
      return state
  }
}

export default MentorReducer
