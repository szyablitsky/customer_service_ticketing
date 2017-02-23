import { createSelector } from 'reselect'
import filter from 'lodash/filter'

const getIds = (state) => state.requests.ids
const getRequestsFilter = (state) => state.requests.filter
const getRequests = (state) => state.entities.requests

export const filteredRequestIds = createSelector(
  getIds, getRequestsFilter, getRequests,
  (ids, requestsFilter, requests) =>
    filter(ids, (id) => {
      const request = requests[id]
      switch (requestsFilter) {
        case 'open': return request.open
        case 'closed': return !request.open
        case 'unassigned': return request.supportAgentId === null
        case 'assigned-open':
          return request.supportAgentId !== null && request.open
        case 'assigned-closed':
          return request.supportAgentId !== null && !request.open
        default: return false
      }
    })
)
