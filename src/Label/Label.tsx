import React from 'react'

export interface IProps {
  error?: string
}

export interface ILabelProps {
  label?: string
}

const Label: React.FC<IProps & ILabelProps> = (props) => {
  return (
    <div className='d-flex'>
      <div className='form-field-label'>{props.label}</div>
      <small className='validation-error-text ml-auto pr-2'>{props.error}</small>
    </div>
  )
}

export { Label }
