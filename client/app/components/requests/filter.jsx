import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default class RequestsFilter extends React.Component {
  handleClick = (e) => {
    e.preventDefault()
    const { filter, active, changeFilter } = this.props
    if (!active) changeFilter(filter)
  }

  render() {
    const { title, active } = this.props
    const className = classNames('filter', { active })
    return (
      <li className={className}>
        <a href='' onClick={this.handleClick} className='link'>{title}</a>
      </li>
    )
  }
}

RequestsFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  changeFilter: PropTypes.func.isRequired,
}
