import { normalize, schema } from 'normalizr'

import * as authActionTypes from '../constants/auth'
import * as requestsActionTypes from '../constants/requests'
import * as requestActionTypes from '../constants/request'
import * as commentActionTypes from '../constants/comment'
import * as usersActionTypes from '../constants/users'


export const initialState = {
  requests: {},
  comments: {},
  users: {},
}

export default function(state = initialState, action = null) {
  const { type, user, response, request, payload } = action

  switch (type) {

    case authActionTypes.SUBMIT_SUCCESS:
    case usersActionTypes.CHANGE_ROLE_SUCCESS:
      return { ...state, users: { ...state.users, [user.id]: user } }

    case authActionTypes.SIGN_OUT_SUCCESS:
      return initialState

    case requestsActionTypes.FETCH_SUCCESS:
    case usersActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        ...entities(response),
      }

    case requestActionTypes.CREATE_SUCCESS:
    case requestActionTypes.CLOSE_SUCCESS:
      return {
        ...state,
        requests: { ...state.requests, [request.id]: request },
      }

    case commentActionTypes.CREATE_SUCCESS:
      return {
        ...state,
        requests: { ...state.requests, [payload.request.id]: payload.request },
        comments: { ...state.comments, [payload.comment.id]: payload.comment },
        users: { ...state.users, [user.id]: user },
      }

    default:
      return state

  }
}

const entities = (response) => {
  const request = new schema.Entity('requests')
  const comment = new schema.Entity('comments')
  const user = new schema.Entity('users')

  const normalized = normalize(response, {
    requests: [request],
    comments: [comment],
    users: [user],
  })

  return normalized.entities
}
