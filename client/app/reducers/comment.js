import map from 'lodash/map'

import * as actionTypes from '../constants/comment'

export const initialState = {
  content: '',
  submitting: false,
  errors: {},
}

export default function(state = initialState, action = null) {
  const { type, content, errors } = action

  switch (type) {

    case actionTypes.CHANGE:
      return { ...state, content, errors: {} }

    case actionTypes.CREATE_BEGIN:
      return { ...state, submitting: true }

    case actionTypes.CREATE_ERROR:
      return { ...state, submitting: false, errors }

    case actionTypes.CREATE_FAILURE:
      return { ...state, submitting: false }

    case actionTypes.RESET:
    case actionTypes.CREATE_SUCCESS:
      return initialState

    default:
      return state

  }
}
