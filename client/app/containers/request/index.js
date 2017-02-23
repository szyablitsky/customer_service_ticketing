import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Request from '../../components/request/'
import { fetch } from '../../actions/requests'

export default connect(
  (state, props) => ({
    loggedIn: Boolean(state.user.id),
    fetching: state.requests.fetching,
    customer: state.user.role === 'customer',
    request: state.entities.requests[props.match.params.id],
  }),
  (dispatch) => bindActionCreators({ fetch }, dispatch)
)(Request)
