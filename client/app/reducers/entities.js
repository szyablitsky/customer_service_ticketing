import * as requestActionTypes from '../constants/request'

export const initialState = {
  requests: {},
}

export default function(state = initialState, action = null) {
  const { type, request } = action

  switch (type) {

    case requestActionTypes.CREATE_SUCCESS:
      return {
        ...state,
        requests: {
          ...state.requests,
          [request.id]: request,
        },
      }

    default:
      return state

  }
}
