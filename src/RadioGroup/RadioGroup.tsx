import React from 'react'
import classnames from 'classnames'

import './index.scss'
import { Label, ILabelProps } from '../Label'

export interface IRadioOption {
  id: string
  value: string
  display: string
}

interface IProps {
  options: IRadioOption[]
  selected?: string
  isRequired?: boolean
  onSelect: (opt: IRadioOption) => any
  errorState?: boolean
}

export type TRadioGroupProps = IProps & ILabelProps

const RadioGroup: React.FC<TRadioGroupProps> = (props) => {
  const options = props.options.map(opt => {
    const className = classnames('co-radio-input-wrapper', { 
      'co-radio-input-wrapper-selected': opt.value === props.selected,
      'co-radio-input-wrapper-error': props.errorState && props.isRequired
    })

    return (
      <div 
        className={className}
        onClick={() => props.onSelect(opt)}
        data-testid={opt.id}
        key={opt.id}
      >
        <label 
          htmlFor={opt.id}
          className='co-radio-label'
        >
          {opt.display}
          <input
            className='co-radio-input'
            type='radio'
            value={opt.value}
            id={opt.id}
          />
        </label>
      </div>
    )
  })

  const className = classnames('co-radio-wrapper', {
    'co-radio-wrapper-error': props.errorState && props.isRequired
  })

  return (
    <div>
      {props.label && (
        <Label
          label={props.label}
          showOptional={props.showOptional}
        />
      )}
      <div className={className}>
        {options}
      </div>
    </div>
  )
}

export { RadioGroup } 
