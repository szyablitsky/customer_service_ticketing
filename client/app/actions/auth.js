import * as actionTypes from '../constants/auth'

export const changeMode = (mode) => ({ type: actionTypes.CHANGE_MODE, mode })
export const changeField = (name, value) => ({ type: actionTypes.CHANGE_FIELD, name, value })

const submitBegin = () => ({ type: actionTypes.SUBMIT_BEGIN })
const submitError = (errors) => ({ type: actionTypes.SUBMIT_ERROR, errors })
const submitFailure = () => ({ type: actionTypes.SUBMIT_FAILURE })
const submitSuccess = (user) => ({ type: actionTypes.SUBMIT_SUCCESS, user })

export const submit = () => (dispatch, getState) => {
  const { submitting, fields } = getState().auth
  if (submitting) return

  dispatch(submitBegin())
  dispatch(submitError())
  dispatch(submitFailure())
  dispatch(submitSuccess())
}
