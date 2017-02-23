import { connect } from 'react-redux'

import RequestsFilters from '../../components/requests/filters'

export default connect(
  (state) => ({
    userRole: state.user.role,
    selectedFilter: state.requests.filter,
  })
)(RequestsFilters)
