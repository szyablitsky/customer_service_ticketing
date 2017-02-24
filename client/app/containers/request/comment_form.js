import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { change, create } from '../../actions/comment'
import CommentForm from '../../components/request/comment_form'

export default connect(
  (state) => ({
    content: state.comment.content,
    submitting: state.comment.submitting,
    errors: state.comment.errors,
  }),
  (dispatch) => bindActionCreators({ change, create }, dispatch)
)(CommentForm)
