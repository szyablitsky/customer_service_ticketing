import omit from 'lodash/omit'

import * as actionTypes from '../constants/request'

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

    case actionTypes.CHANGE_FIELD:
      return {
        ...state,
        fields: { ...state.fields, [name]: value },
        errors: omit(state.errors, name),
      }

    case actionTypes.CREATE_BEGIN:
      return { ...state, submitting: true }

    case actionTypes.CREATE_FAILURE:
      return { ...state, submitting: false }

    case actionTypes.CREATE_ERROR:
      return { ...state, submitting: false, errors }

    case actionTypes.CREATE_SUCCESS:
      return initialState

    default:
      return state

  }
}
