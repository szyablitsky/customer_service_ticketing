import { request } from './base'
import withToken from './token'

const RequestsEndpoint = {
  index: () => withToken(() => request({ uri: '/api/requests', method: 'get' })),
  create: (params) => withToken(() => request({ uri: '/api/requests', params })),
  close: (id) => withToken(() => request({ uri: `/api/requests/${id}/close` })),
  comment: (id, params) => withToken(() => request({ uri: `/api/requests/${id}/comments`, params })),
}

export default RequestsEndpoint
