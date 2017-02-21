import React, { PropTypes } from 'react'
import classNames from 'classnames'

export default class Button extends React.Component {
  render() {
    const { title, type, className, loading, onClick } = this.props
    const buttonClass = classNames('button', className, { loading })
    return (
      <button type={type} className={buttonClass} onClick={onClick}>
        <div className='loading-background'/>
        {title}
      </button>
    )
  }
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  type: 'button',
  loading: false,
}
