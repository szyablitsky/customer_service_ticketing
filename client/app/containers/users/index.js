import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Users from '../../components/users/'
import { fetch } from '../../actions/users'

export default connect(
  (state) => ({
    loggedIn: Boolean(state.user.id),
    admin: state.user.role === 'admin',
  }),
  (dispatch) => bindActionCreators({ fetch }, dispatch)
)(Users)
