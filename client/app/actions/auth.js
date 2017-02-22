import * as actionTypes from '../constants/auth'
import SessionEndpoint from 'shared/endpoints/session'
import { notifyInfo, notifyError } from 'shared/components/notifier'
import { saveState } from 'shared/local_storage'

export const changeMode = (mode) => ({ type: actionTypes.CHANGE_MODE, mode })
export const changeField = (name, value) => ({ type: actionTypes.CHANGE_FIELD, name, value })

const submitBegin = () => ({ type: actionTypes.SUBMIT_BEGIN })
const submitError = (errors) => ({ type: actionTypes.SUBMIT_ERROR, errors })
const submitFailure = () => ({ type: actionTypes.SUBMIT_FAILURE })
const submitSuccess = (info) => ({ type: actionTypes.SUBMIT_SUCCESS, info })

export const submit = () => (dispatch, getState) => {
  const { submitting, fields: { email, password } } = getState().auth
  if (submitting) return

  dispatch(submitBegin())
  SessionEndpoint.signIn({ session: { email, password } })
  .then((response) => {
    if (response.success) {
      notifyInfo('Welcome back!')
      saveState('user', response.json)
      dispatch(submitSuccess(response.json))
    } else {
      notifyError(response.json.errors.base.join(', '))
      dispatch(submitError(response.json.errors))
    }
  })
  .catch(() => dispatch(submitFailure()))
}

const signOutBegin = () => ({ type: actionTypes.SIGN_OUT_BEGIN })
const signOutFailure = () => ({ type: actionTypes.SIGN_OUT_FAILURE })
const signOutSuccess = () => ({ type: actionTypes.SIGN_OUT_SUCCESS })

export const signOut = () => (dispatch, getState) => {
  const { submitting } = getState().auth
  if (submitting) return

  dispatch(signOutBegin())
  SessionEndpoint.signOut()
  .then((response) => {
    if (response.success) {
      notifyInfo('Have a nice day!')
      saveState('user', {})
      dispatch(signOutSuccess())
    } else {
      dispatch(signOutFailure())
    }
  })
  .catch(() => dispatch(signOutFailure()))
}
