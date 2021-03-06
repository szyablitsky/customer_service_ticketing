import React, { PropTypes } from 'react'
import classNames from 'classnames'
import TextArea from 'react-autosize-textarea'

export default class FormField extends React.Component {
  constructor(props) {
    super(props)
    this.state = { focus: false, hover: false }
  }

  isTextarea = () => this.props.type === 'textarea'

  handleFocus = () => this.setState({ focus: true })
  handleBlur = () => this.setState({ focus: false })
  handleLabelClick = () => this.isTextarea() ? this.input.textarea.focus() : this.input.focus()
  handleLabelMouseOver = () => this.setState({ hover: true })
  handleLabelMouseOut = () => this.setState({ hover: false })

  handleChange = ({ target: { value } }) => {
    const { name, onChange } = this.props
    name ? onChange(name, value) : onChange(value) // eslint-disable-line no-unused-expressions
  }

  render() {
    const { className, type, value, name, label, rows, errors } = this.props
    const { focus, hover } = this.state

    const containerClass = classNames('form-field-container', className)
    const labelClass = classNames('form-field-label', {
      outside: focus || value.length > 0,
    })
    const inputClass = classNames(
      this.isTextarea() ? 'form-field-textarea' : 'form-field-input', {
        hover, error: Boolean(errors),
      }
    )

    return (
      <div className={containerClass}>
        <label className={labelClass} onClick={this.handleLabelClick}
          onMouseOver={this.handleLabelMouseOver} onMouseOut={this.handleLabelMouseOut}>
          {label}
        </label>
        {this.isTextarea()
          ? <TextArea id={name} className={inputClass} rows={rows}
              value={value} onChange={this.handleChange}
              onFocus={this.handleFocus} onBlur={this.handleBlur}
              ref={(c) => { this.input = c }} />
          : <input id={name} type={type} className={inputClass}
              value={value} onChange={this.handleChange}
              onFocus={this.handleFocus} onBlur={this.handleBlur}
              ref={(c) => { this.input = c }} />}
        {errors && <div className='form-field-errors'>{errors.join(', ')}</div>}
      </div>
    )
  }
}

FormField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  rows: PropTypes.number,
  errors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
}

FormField.defaultProps = {
  type: 'text',
  label: '',
}
