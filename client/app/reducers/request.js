import omit from 'lodash/omit'

import * as authActionTypes from '../constants/auth'
import * as requestActionTypes from '../constants/request'

export const initialState = {
  fields: {
    subject: '',
    description: '',
  },
  errors: {},
  submitting: false,
}

export default function(state = initialState, action = null) {
  const { type, name, value, errors } = action

  switch (type) {

    case authActionTypes.SIGN_OUT_SUCCESS:
      return initialState

    case requestActionTypes.CHANGE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [name]: value },
        errors: omit(state.errors, name),
      }

    case requestActionTypes.CREATE_BEGIN:
      return { ...state, submitting: true }

    case requestActionTypes.CREATE_FAILURE:
      return { ...state, submitting: false }

    case requestActionTypes.CREATE_ERROR:
      return { ...state, submitting: false, errors }

    case requestActionTypes.CREATE_SUCCESS:
      return initialState

    default:
      return state

  }
}
