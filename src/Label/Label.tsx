import React from 'react'
import './index.scss'

export interface IProps {
  error?: string
  info?: string
  success?: string
}

export interface ILabelProps {
  label?: string
  showOptional?: boolean
}

const Label: React.FC<IProps & ILabelProps> = (props) => {
  return (
    <div className='d-flex'>
      <div className='co-form-field-label'>
        {props.label}
        {props.showOptional && <span className='co-form-field-optional-label'>(Optional)</span>}
      </div>
      <small className='co-label-text validation-error-text ml-auto'>{props.error}</small>
      {props.info && <small className='co-label-text ml-auto co-async-input-loading'>{props.info}</small>}
      {props.success && <small className='co-label-text ml-auto co-async-input-success'>{props.success}</small>}
    </div>
  )
}

export { Label }
