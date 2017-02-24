import { connect } from 'react-redux'

import App from '../components/'

export default connect((state) => ({ admin: state.user.role === 'admin' }))(App)
