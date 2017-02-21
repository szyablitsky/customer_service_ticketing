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
}

export default function(state = initialState, action = null) {
  const { type, mode, name, value } = action

  switch (type) {

    case actionTypes.CHANGE_MODE:
      return { ...state, mode }

    case actionTypes.CHANGE_FIELD:
      return { ...state, fields: { ...state.fields, [name]: value } }

    case actionTypes.SUBMIT_BEGIN:
      return { ...state, submitting: true }

    case actionTypes.SUBMIT_ERROR:
    case actionTypes.SUBMIT_FAILURE:
    case actionTypes.SUBMIT_SUCCESS:
      return { ...state, submitting: false }

    default:
      return state

  }
}
