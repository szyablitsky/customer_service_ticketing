import omit from 'lodash/omit'

import * as actionTypes from '../constants/auth'

export const initialState = {
  id: null,
  name: '',
  email: '',
  role: 'customer',
}

export default function(state = initialState, action = null) {
  const { type, info } = action

  switch (type) {

    // authentication
    case actionTypes.SUBMIT_SUCCESS:
      return { ...state, ...omit(info, 'user'), ...info.user }

    default:
      return state

  }
}
