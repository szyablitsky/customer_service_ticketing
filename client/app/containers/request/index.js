import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Request from '../../components/request/'
import { fetch } from '../../actions/requests'
import { close } from '../../actions/request'
import { reset } from '../../actions/comment'

const mapStateToProps = (state, props) => {
  const { id } = props.match.params
  const request = state.entities.requests[id]
  return {
    loggedIn: Boolean(state.user.id),
    fetching: state.requests.fetching,
    customer: state.user.role === 'customer',
    request,
    authorName: request && state.entities.users[request.user_id],
    closing: state.requests.closingId === id,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetch, close, commentReset: reset,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Request)
