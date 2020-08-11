import React from 'react'
import './index.scss'

export interface IProps {
  error?: string
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
      <small className='validation-error-text ml-auto'>{props.error}</small>
    </div>
  )
}

export { Label }
