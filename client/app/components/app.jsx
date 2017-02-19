import React, { PropTypes } from 'react'

const App = ({ name, updateName }) => (
  <div>
    <h3>
      Hello, {name}!
    </h3>
    <hr />
    <form >
      <label htmlFor='name'>
        Say hello to:
      </label>
      <input
        id='name'
        type='text'
        value={name}
        onChange={(e) => updateName(e.target.value)}
      />
    </form>
  </div>
)

App.propTypes = {
  name: PropTypes.string.isRequired,
  updateName: PropTypes.func.isRequired,
}

export default App
