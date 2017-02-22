import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeField, create } from '../actions/request'
import RequestCreate from '../components/request_create'

export default connect(
  (state) => ({
    loggedIn: Boolean(state.user.id),
    customer: state.user.role === 'customer',
    subject: state.request.fields.subject,
    description: state.request.fields.description,
    errors: state.request.errors,
    submitting: state.request.submitting,
  }),
  (dispatch) => bindActionCreators({ changeField, create }, dispatch)
)(RequestCreate)
