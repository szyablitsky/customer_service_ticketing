import * as actionTypes from '../constants/users'
import UsersEndpoint from 'shared/endpoints/users'
import { notifySuccess, notifyWarning } from 'shared/components/notifier'

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

const changeRoleBegin = () => ({ type: actionTypes.CHANGE_ROLE_BEGIN })
const changeRoleFailure = () => ({ type: actionTypes.CHANGE_ROLE_FAILURE })
const changeRoleSuccess = (user) => ({ type: actionTypes.CHANGE_ROLE_SUCCESS, user })

export const changeRole = (user, role) => (dispatch, getState) => {
  const { changingRole } = getState().users
  if (changingRole) return

  dispatch(changeRoleBegin())
  UsersEndpoint.update(user.id, { user: { role } })
  .then((response) => {
    if (response.success) {
      dispatch(changeRoleSuccess({ ...user, role }))
      notifySuccess(`The role of ${user.name} changed to ${role}`)
    } else {
      notifyWarning(response.json.errors.base.join(', '))
      dispatch(changeRoleFailure())
    }
  })
  .catch(() => dispatch(changeRoleFailure()))
}
