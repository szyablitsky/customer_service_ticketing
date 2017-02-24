import { request } from './base'
import withToken from './token'

const UsersEndpoint = {
  index: () => withToken(() => request({ uri: '/api/users', method: 'get' })),
}

export default UsersEndpoint
