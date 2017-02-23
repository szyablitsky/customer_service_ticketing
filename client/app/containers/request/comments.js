import { connect } from 'react-redux'
import filter from 'lodash/filter'

import Comments from '../../components/request/comments'

export default connect(
  (state, props) => ({
    comments: filter(
      state.entities.comments,
      (comment) => comment.requestId === props.requestId
    ),
  })
)(Comments)
