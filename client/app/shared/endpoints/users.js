import { request } from './base'
import withToken from './token'

const UsersEndpoint = {
  index: () => withToken(() => request({ uri: '/api/users', method: 'get' })),
  update: (id, params) => withToken(() => request({ uri: `/api/users/${id}`, params, method: 'put' })),
}

export default UsersEndpoint
