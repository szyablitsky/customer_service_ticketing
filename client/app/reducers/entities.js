import { normalize, schema } from 'normalizr'

import * as authActionTypes from '../constants/auth'
import * as requestsActionTypes from '../constants/requests'
import * as requestActionTypes from '../constants/request'


export const initialState = {
  requests: {},
  comments: {},
  users: {},
}

export default function(state = initialState, action = null) {
  const { type, user, response, request } = action

  switch (type) {

    case authActionTypes.SUBMIT_SUCCESS:
      return { ...state, users: { [user.id]: user } }

    case authActionTypes.SIGN_OUT_SUCCESS:
      return initialState

    case requestsActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        ...entities(response),
      }

    case requestActionTypes.CREATE_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          [request.id]: request,
        },
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
