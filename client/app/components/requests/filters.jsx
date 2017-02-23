import React, { PropTypes } from 'react'
import map from 'lodash/map'

import roleFilters from '../../constants/requests/filter'
import RequestsFilter from '../../containers/requests/filter'

export default class RequestsFilters extends React.Component {
  render() {
    const { userRole, selectedFilter } = this.props
    const filters = roleFilters[userRole]
    return (
      <ul className='filters'>
        {map(filters, (title, filter) =>
          <RequestsFilter key={filter} filter={filter} title={title}
                          active={filter === selectedFilter}/>
        )}
      </ul>
    )
  }
}

RequestsFilters.propTypes = {
  userRole: PropTypes.string.isRequired,
  selectedFilter: PropTypes.string.isRequired,
}
