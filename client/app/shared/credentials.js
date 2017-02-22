import { loadState, saveState } from './local_storage'

const key = 'credentials'

export function saveCredentials(data) {
  saveState(key, data)
}

export function loadCredentials() {
  return loadState(key) || {}
}

export function updateApiToken(apiToken) {
  saveState(key, { ...loadCredentials(), apiToken })
}
