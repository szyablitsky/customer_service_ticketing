import QueryString from 'query-string'
import includes from 'lodash/includes'
import { decamelizeKeys, camelizeKeys } from 'humps'

import { notifyError } from '../components/notifier'

function jsonParams(json, method) {
  return {
    method,
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: method === 'get' ? null : JSON.stringify(json),
  }
}

function handleResponse(response) {
  const { status } = response
  if (includes([200, 201, 204, 422], status)) {
    return Promise.resolve(
      status === 204
        ? { success: true, json: {} }
        : response.json().then((json) => ({
            success: status !== 422,
            json: camelizeKeys(json),
          }))
    )
  }
  throw response
}

function handleFailure(ex) {
  console.error(ex) // eslint-disable-line no-console
  notifyError('Request error. Try again or reload the page.')
  throw new Error()
}

export function request(options) {
  const { uri, params: params = {}, method: method = 'post' } = options
  const decamelizedParams = decamelizeKeys(params)
  const queryString = method === 'get' ? `?${QueryString.stringify(decamelizedParams)}` : ''
  const url = uri + queryString

  return fetch(url, jsonParams(decamelizedParams, method))
    .then(handleResponse)
    .catch(handleFailure)
}
