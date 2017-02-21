import { request } from './base'

const SessionEndpoint = {
  signIn: (params) => request({ uri: '/api/session', params }),
}

export default SessionEndpoint
