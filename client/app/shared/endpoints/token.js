import { request } from './base'
import { loadCredentials, saveCredentials, updateApiToken } from '../credentials'
import { notifyError } from '../components/notifier'
import SessionEndpoint from './session'

function tokenNotExpired(token) {
  if (typeof token !== 'string') return false

  try {
    const json = atob(token.split('.')[1])
    const payload = JSON.parse(json)
    const now = new Date()
    const diff = payload.exp - now.valueOf() / 1000
    return diff > 59 * 60 // revert back to 5 * 60
  } catch (ex) {
    return false
  }
}

function forceSignOut() {
  SessionEndpoint.signOut()
  .then(() => {
    saveCredentials(null)
    window.location.reload(true)
  })
  .catch(() => {
    notifyError('Request error. Try again or reload the page.')
  })
}

export default function withToken(wrappedRequest) { // eslint-disable-line consistent-return
  const { apiToken, ...credentials } = loadCredentials()
  if (tokenNotExpired(apiToken)) return wrappedRequest()

  return request({ uri: '/api/token', params: credentials })
  .then((response) => {
    if (response.success) {
      updateApiToken(response.json.apiToken)
      return wrappedRequest()
    }

    forceSignOut()
    return Promise.reject()
  })
  .catch(() => Promise.reject())
}
