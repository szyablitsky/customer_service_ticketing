import map from 'lodash/map'

import * as actionTypes from '../constants/users'

export const initialState = {
  ids: [],
  loaded: false,
  fetching: false,
}

export default function(state = initialState, action = null) {
  const { type, response } = action

  switch (type) {

    case actionTypes.FETCH_BEGIN:
      return { ...state, fetching: true }

    case actionTypes.FETCH_FAILURE:
      return { ...state, fetching: false }

    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        loaded: true,
        ids: map(response.users, (user) => user.id), // eslint-disable-line no-shadow
      }

    default:
      return state

  }
}
