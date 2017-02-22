import omit from 'lodash/omit'

import { SIGN_IN } from '../constants/auth/mode'
import * as actionTypes from '../constants/auth'

const fieldsInitialState = {
  name: '',
  email: '',
  password: '',
}

export const initialState = {
  mode: SIGN_IN,
  fields: fieldsInitialState,
  submitting: false,
  errors: {},
}

export default function(state = initialState, action = null) {
  const { type, mode, name, value, errors } = action

  switch (type) {

    case actionTypes.CHANGE_MODE:
      return { ...state, mode, errors: {} }

    case actionTypes.CHANGE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [name]: value },
        errors: omit(state.errors, name),
      }

    case actionTypes.SUBMIT_BEGIN:
    case actionTypes.SIGN_OUT_BEGIN:
      return { ...state, submitting: true }

    case actionTypes.SUBMIT_FAILURE:
    case actionTypes.SIGN_OUT_FAILURE:
      return { ...state, submitting: false }

    case actionTypes.SUBMIT_ERROR:
      return { ...state, submitting: false, errors }

    case actionTypes.SUBMIT_SUCCESS:
    case actionTypes.SIGN_OUT_SUCCESS:
      return initialState

    default:
      return state

  }
}
