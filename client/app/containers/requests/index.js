import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Requests from '../../components/requests/'
import { fetch } from '../../actions/requests'

export default connect(
  (state) => ({
    loggedIn: Boolean(state.user.id),
    customer: state.user.role === 'customer',
  }),
  (dispatch) => bindActionCreators({ fetch }, dispatch)
)(Requests)
