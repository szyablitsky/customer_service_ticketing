import { normalize, schema } from 'normalizr'

import * as authActionTypes from '../constants/auth'
import * as requestsActionTypes from '../constants/requests'
import * as requestActionTypes from '../constants/request'


export const initialState = {
  requests: {},
  comments: {},
}

export default function(state = initialState, action = null) {
  const { type, response, request } = action

  switch (type) {

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

  const normalized = normalize(response, {
    requests: [request],
    comments: [comment],
  })

  return normalized.entities
}
