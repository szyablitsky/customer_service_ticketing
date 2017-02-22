import * as actionTypes from '../constants/request'

export const initialState = {
  ids: [],
}

export default function(state = initialState, action = null) {
  const { type, request } = action

  switch (type) {

    case actionTypes.CREATE_SUCCESS:
      return { ...state, ids: [request.id, ...state.ids] }

    default:
      return state

  }
}
