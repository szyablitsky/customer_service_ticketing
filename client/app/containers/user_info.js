import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { signOut } from '../actions/auth'
import UserInfo from '../components/user_info'

export default connect(
  (state) => ({
    loggedIn: Boolean(state.user.id),
    name: state.user.name,
    role: state.user.role,
  }),
  (dispatch) => bindActionCreators({ signOut }, dispatch)
)(UserInfo)
