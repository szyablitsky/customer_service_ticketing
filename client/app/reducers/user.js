// import { UPDATE } from '../constants/app'

export const initialState = {
  loggedIn: false,
  name: '',
}

export default function(state = initialState, action = null) {
  const { type } = action

  switch (type) {

    default:
      return state

  }
}
