import { request } from './base'

const RegistrationEndpoint = {
  create: (params) => request({ uri: '/api/registrations', params }),
}

export default RegistrationEndpoint
