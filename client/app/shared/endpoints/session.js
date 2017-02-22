import { request } from './base'

const SessionEndpoint = {
  signIn: (params) => request({ uri: '/api/session', params }),
  signOut: (key) => request({ uri: `/api/session/${key}`, method: 'delete' }),
}

export default SessionEndpoint
