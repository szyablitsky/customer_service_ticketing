import * as actionTypes from '../constants/comment'
import RequestsEndpoint from 'shared/endpoints/requests'
import { notifySuccess } from 'shared/components/notifier'

export const change = (content) => ({ type: actionTypes.CHANGE, content })
export const reset = () => ({ type: actionTypes.RESET })

const createBegin = (id) => ({ type: actionTypes.CREATE_BEGIN, id })
const createError = (errors) => ({ type: actionTypes.CREATE_ERROR, errors })
const createFailure = () => ({ type: actionTypes.CREATE_FAILURE })
const createSuccess = (user, payload) => ({ type: actionTypes.CREATE_SUCCESS, user, payload })

export const create = (requestId) => (dispatch, getState) => {
  const { comment: { content, submitting }, user } = getState()
  if (submitting) return

  dispatch(createBegin(requestId))
  RequestsEndpoint.comment(requestId, { comment: { content } })
  .then((response) => {
    if (response.success) {
      dispatch(createSuccess(user, response.json))
      notifySuccess('Comment submited')
    } else {
      dispatch(createError(response.json.errors))
    }
  })
  .catch(() => dispatch(createFailure()))
}
