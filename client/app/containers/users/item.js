import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UserItem from '../../components/users/item'
import { changeRole } from '../../actions/users'

export default connect(
  (state, props) => ({
    user: state.entities.users[props.id],
  }),
  (dispatch) => bindActionCreators({ changeRole }, dispatch)
)(UserItem)
