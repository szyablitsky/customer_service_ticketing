import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { comment } from '../../actions/request'
import CommentForm from '../../components/request/comment_form'

export default connect(
  (state, props) => ({
    commenting: state.requests.commentingId === props.requestId,
    errors: state.requests.commentingErrors,
  }),
  (dispatch) => bindActionCreators({ comment }, dispatch)
)(CommentForm)
