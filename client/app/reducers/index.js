import { combineReducers } from 'redux'

import auth, { initialState as authState } from './auth'
import user, { initialState as userState } from './user'

export const initialStates = {
  auth: authState,
  user: userState,
}

export default combineReducers({
  auth,
  user,
})
