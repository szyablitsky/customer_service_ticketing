import map from 'lodash/map'

import * as authActionTypes from '../constants/auth'
import * as actionTypes from '../constants/users'

export const initialState = {
  ids: [],
  loaded: false,
  fetching: false,
  changingRole: false,
}

export default function(state = initialState, action = null) {
  const { type, response } = action

  switch (type) {

    case authActionTypes.SIGN_OUT_SUCCESS:
      return initialState

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

    case actionTypes.CHANGE_ROLE_BEGIN:
      return { ...state, changingRole: true }

    case actionTypes.CHANGE_ROLE_FAILURE:
    case actionTypes.CHANGE_ROLE_SUCCESS:
      return { ...state, changingRole: false }

    default:
      return state

  }
}
