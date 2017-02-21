import * as actionTypes from '../constants/auth'
import SessionEndpoint from 'shared/endpoints/session'
import { notifyInfo, notifyError } from 'shared/components/notifier'

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
      dispatch(submitSuccess(response.json))
    } else {
      notifyError(response.json.errors.base.join(', '))
      dispatch(submitError(response.json.errors))
    }
  })
  .catch(() => dispatch(submitFailure()))
}
