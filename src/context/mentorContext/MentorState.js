import React, { useReducer, useEffect } from 'react'
import MentorContext from './MentorContext'
import MentorReducer from './MentorReducer'
import api from '../../api/mentors-api';

const MentorState = (props) => {
  const initialState = {
    mentors: [],
  }

  const [state, dispatch] = useReducer(MentorReducer, initialState)

  useEffect(() => {
    api
      .get('/v1/mentors/')
      .then((response) => { 
        console.log(response.data.data);
        dispatch({ type: 'SUCCESS', payload: response.data.data});
      })
      .catch((err) => {
        dispatch({ type: 'ERROR', error: err});
      })
  }, [])
 
  return (
    <MentorContext.Provider value={{ mentors: state.mentors }}>
      {props.children}
    </MentorContext.Provider>
  )
}

export default MentorState