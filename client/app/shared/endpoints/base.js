import ReactOnRails from 'react-on-rails'
import QueryString from 'query-string'
import includes from 'lodash/includes'
import { decamelizeKeys } from 'humps'

import { notifyError } from '../components/notifier'

function jsonParams(json, method) {
  const date = new Date()
  return {
    method,
    credentials: 'same-origin',
    headers: ReactOnRails.authenticityHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Current-Time': Math.floor(date.getTime() / 1000),
    }),
    body: method === 'get' ? null : JSON.stringify(json),
  }
}

function handleResponse(response) {
  const { status, headers } = response
  if (includes([200, 201, 204, 422], status)) {
    return Promise.resolve(
      status === 204
        ? { success: true, json: {}, location: headers.get('Location') }
        : response.json().then((json) => ({ success: status !== 422, location: headers.get('Location'), json }))
    )
  }
  throw response
}

function handleFailure(ex) {
  console.error(ex) // eslint-disable-line no-console
  notifyError('Ошибка обработки запроса. Попробуйте еще раз, или перезагрузите страницу.')
  throw new Error()
}

export function railsRequest(options) {
  const { uri, params: params = {}, method: method = 'post' } = options
  const decamelizedParams = decamelizeKeys(params)
  const queryString = method === 'get' ? `?${QueryString.stringify(decamelizedParams)}` : ''
  const url = uri + queryString

  return fetch(url, jsonParams(decamelizedParams, method))
    .then(handleResponse)
    .catch(handleFailure)
}

export function externalGetRequest(options) {
  const { uri, params: params = {} } = options
  const url = `${uri}?${QueryString.stringify(params)}`
  return fetch(url)
  .then((response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    }
    const error = new Error(response.statusText)
    error.response = response
    throw error
  })
  .then((response) => response.json())
}
