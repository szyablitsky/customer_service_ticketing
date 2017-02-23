import * as actionTypes from '../constants/requests'
import RequestsEndpoint from 'shared/endpoints/requests'
import { notifySuccess } from 'shared/components/notifier'

export const changeFilter = (filter) => ({ type: actionTypes.CHANGE_FILTER, filter })

const fetchBegin = () => ({ type: actionTypes.FETCH_BEGIN })
const fetchFailure = () => ({ type: actionTypes.FETCH_FAILURE })
const fetchSuccess = (requests) => ({ type: actionTypes.FETCH_SUCCESS, requests })

export const fetch = () => (dispatch, getState) => {
  const { fetching } = getState().request
  if (fetching) return

  dispatch(fetchBegin())
  RequestsEndpoint.index()
  .then((response) => {
    if (response.success) {
      dispatch(fetchSuccess(response.json))
      notifySuccess('Requests loaded')
    } else {
      dispatch(fetchFailure())
    }
  })
  .catch(() => dispatch(fetchFailure()))
}
