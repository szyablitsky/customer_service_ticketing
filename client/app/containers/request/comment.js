import { connect } from 'react-redux'

import Comment from '../../components/request/comment'

export default connect(
  (state, props) => ({ author: state.entities.users[props.comment.userId] })
)(Comment)
