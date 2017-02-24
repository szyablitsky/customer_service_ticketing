import * as actionTypes from '../constants/users'
import UsersEndpoint from 'shared/endpoints/users'
import { notifySuccess } from 'shared/components/notifier'

const fetchBegin = () => ({ type: actionTypes.FETCH_BEGIN })
const fetchFailure = () => ({ type: actionTypes.FETCH_FAILURE })
const fetchSuccess = (response) => ({ type: actionTypes.FETCH_SUCCESS, response })

export const fetch = () => (dispatch, getState) => {
  const { fetching, loaded } = getState().users
  if (fetching || loaded) return

  dispatch(fetchBegin())
  UsersEndpoint.index()
  .then((response) => {
    if (response.success) {
      dispatch(fetchSuccess(response.json))
      notifySuccess('Users loaded')
    } else {
      dispatch(fetchFailure())
    }
  })
  .catch(() => dispatch(fetchFailure()))
}
