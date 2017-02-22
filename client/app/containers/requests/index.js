import { connect } from 'react-redux'

import Requests from '../../components/requests/'

export default connect(
  (state) => ({
    loggedIn: Boolean(state.user.id),
    customer: state.user.role === 'customer',
  })
)(Requests)
