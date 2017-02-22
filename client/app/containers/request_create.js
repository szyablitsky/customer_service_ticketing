import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

// import { signOut } from '../actions/auth'
import RequestCreate from '../components/request_create'

export default connect(
  (state) => ({
    // loggedIn: Boolean(state.user.id),
    // name: state.user.name,
  }),
  // (dispatch) => bindActionCreators({ signOut }, dispatch)
)(RequestCreate)
