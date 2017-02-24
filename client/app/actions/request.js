import * as actionTypes from '../constants/request'
import RequestsEndpoint from 'shared/endpoints/requests'
import { notifySuccess } from 'shared/components/notifier'

export const changeField = (name, value) => ({ type: actionTypes.CHANGE_FIELD, name, value })

const createBegin = () => ({ type: actionTypes.CREATE_BEGIN })
const createError = (errors) => ({ type: actionTypes.CREATE_ERROR, errors })
const createFailure = () => ({ type: actionTypes.CREATE_FAILURE })
const createSuccess = (request) => ({ type: actionTypes.CREATE_SUCCESS, request })

export const create = (push) => (dispatch, getState) => {
  const { submitting, fields } = getState().request
  if (submitting) return

  dispatch(createBegin())
  RequestsEndpoint.create({ request: fields })
  .then((response) => {
    if (response.success) {
      dispatch(createSuccess(response.json))
      notifySuccess('Request created')
      push('/requests')
    } else {
      dispatch(createError(response.json.errors))
    }
  })
  .catch(() => dispatch(createFailure()))
}

const closeBegin = (id) => ({ type: actionTypes.CLOSE_BEGIN, id })
const closeFailure = () => ({ type: actionTypes.CLOSE_FAILURE })
const closeSuccess = (request) => ({ type: actionTypes.CLOSE_SUCCESS, request })

export const close = (id) => (dispatch, getState) => {
  const { closingId } = getState().request
  if (closingId) return

  dispatch(closeBegin(id))
  RequestsEndpoint.close(id)
  .then((response) => {
    if (response.success) {
      dispatch(closeSuccess(response.json))
      notifySuccess('Request closed')
    } else {
      dispatch(closeFailure())
    }
  })
  .catch(() => dispatch(closeFailure()))
}

export const commentReset = () => ({ type: actionTypes.COMMENT_RESET })

const commentBegin = (id) => ({ type: actionTypes.COMMENT_BEGIN, id })
const commentError = (errors) => ({ type: actionTypes.COMMENT_ERROR, errors })
const commentFailure = () => ({ type: actionTypes.COMMENT_FAILURE })
const commentSuccess = (user, payload) => ({ type: actionTypes.COMMENT_SUCCESS, user, payload })

export const comment = (requestId, content) => (dispatch, getState) => {
  const { request: { commentingId }, user } = getState()
  if (commentingId) return

  dispatch(commentBegin(requestId))
  RequestsEndpoint.comment(requestId, { comment: { content } })
  .then((response) => {
    if (response.success) {
      dispatch(commentSuccess(user, response.json))
      notifySuccess('Comment submited')
    } else {
      dispatch(commentError(response.json.errors))
    }
  })
  .catch(() => dispatch(commentFailure()))
}
