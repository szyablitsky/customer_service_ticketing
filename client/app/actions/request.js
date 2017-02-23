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
