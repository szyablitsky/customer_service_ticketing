import { connect } from 'react-redux'
import App from '../components/app'
import * as actions from '../actions/app'

const mapStateToProps = (state) => ({ name: state.name })

export default connect(mapStateToProps, actions)(App)
