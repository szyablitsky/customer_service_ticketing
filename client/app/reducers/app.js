import { combineReducers } from 'redux'
import { UPDATE } from '../constants/app'

const name = (state = '', action) => {
  switch (action.type) {
    case UPDATE:
      return action.text
    default:
      return state
  }
};

const appReducer = combineReducers({ name })

export default appReducer
