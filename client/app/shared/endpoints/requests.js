import { request } from './base'
import withToken from './token'

const RequestsEndpoint = {
  create: (params) => withToken(() => request({ uri: '/api/requests', params })),
  index: () => withToken(() => request({ uri: '/api/requests', method: 'get' })),
}

export default RequestsEndpoint
