import * as actionTypes from '../constants/request'

export const initialState = {
  ids: [],
}

export default function(state = initialState, action = null) {
  const { type } = action

  switch (type) {

    default:
      return state

  }
}
