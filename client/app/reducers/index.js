import { combineReducers } from 'redux'

import auth, { initialState as authState } from './auth'
import user, { initialState as userState } from './user'
import requests, { initialState as requestsState } from './requests'
import entities, { initialState as entitiesState } from './entities'

export const initialStates = {
  auth: authState,
  user: userState,
  requests: requestsState,
  entities: entitiesState,
}

export default combineReducers({
  auth,
  user,
  requests,
  entities,
})
