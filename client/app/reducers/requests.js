import map from 'lodash/map'

import * as authActionTypes from '../constants/auth'
import * as requestsActionTypes from '../constants/requests'
import * as requestActionTypes from '../constants/request'

export const initialFilter = {
  customer: 'open',
  'support agent': 'unassigned',
  admin: 'open',
}

export const initialState = {
  ids: [],
  filter: null,
  loaded: false,
  fetching: false,
}

export default function(state = initialState, action = null) {
  const { type, user, filter, requests, request } = action

  switch (type) {

    case authActionTypes.SUBMIT_SUCCESS:
      return { ...state, filter: initialFilter[user.role] }

    case requestsActionTypes.CHANGE_FILTER:
      return { ...state, filter }

    case requestsActionTypes.FETCH_BEGIN:
      return { ...state, fetching: true }

    case requestsActionTypes.FETCH_FAILURE:
      return { ...state, fetching: false }

    case requestsActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        loaded: true,
        ids: map(requests, (request) => request.id), // eslint-disable-line no-shadow
      }

    case requestActionTypes.CREATE_SUCCESS:
      return { ...state, ids: [request.id, ...state.ids] }

    default:
      return state

  }
}
