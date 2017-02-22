import omit from 'lodash/omit'

import * as actionTypes from '../constants/auth'

export const initialState = {
  id: null,
  name: '',
  email: '',
  role: 'customer',
}

export default function(state = initialState, action = null) {
  const { type, user } = action

  switch (type) {

    // authentication
    case actionTypes.SUBMIT_SUCCESS:
      return { ...state, ...user }

    // sign out
    case actionTypes.SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state

  }
}
