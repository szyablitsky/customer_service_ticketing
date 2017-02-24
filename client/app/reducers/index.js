import { combineReducers } from 'redux'

import auth, { initialState as authState } from './auth'
import user, { initialState as userState } from './user'
import request, { initialState as requestState } from './request'
import comment, { initialState as commentState } from './comment'
import requests, { initialState as requestsState } from './requests'
import users, { initialState as usersState } from './users'
import entities, { initialState as entitiesState } from './entities'

export const initialStates = {
  auth: authState,
  user: userState,
  request: requestState,
  comment: commentState,
  requests: requestsState,
  users: usersState,
  entities: entitiesState,
}

export default combineReducers({
  auth,
  user,
  request,
  comment,
  requests,
  users,
  entities,
})
