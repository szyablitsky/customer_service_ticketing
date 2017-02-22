import { connect } from 'react-redux'

import RequestsSelector from '../../components/requests/selector'

export default connect(
  (state) => ({
    // loggedIn: Boolean(state.user.id),
    // hasRequests: state.requests.ids.length > 0,
    // isCustomer: state.user.role === 'customer',
  })
)(RequestsSelector)
