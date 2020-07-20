import React, { createRef, useState } from 'react'

import { Label } from '../Label'
import './index.scss'

export interface IDateProps extends React.HTMLAttributes<HTMLInputElement>{
  label?: string
  initialValue?: IDateState
  onDateChange?: (event: React.FormEvent<HTMLInputElement>, value: IDateState, valid: boolean) => any
  format: 'DD/MM/YYYY' | 'MM/DD/YYYY'
}

export interface IValidity {
  valid: boolean
  message?: string
}

export const validate = (value: IDateState, customValidator?: (value: IDateState) => IValidity): IValidity => {
  const isNumber = (val: string) => !(isNaN(parseInt(val)))

  if (!isNumber(value.dd) || !isNumber(value.mm) || !isNumber(value.yyyy)) {
    return { valid: false, message: 'Invalid date' }
  }

  const dd = parseInt(value.dd)
  const mm = parseInt(value.mm)
  const yyyy = parseInt(value.yyyy)

  if (dd < 1 || dd > 31 || mm < 1 || mm > 12 || yyyy < 0) {
    return { valid: false, message: 'Invalid date' }
  }


  // do not allow invalid days, like 31st of Feb.
  if (new Date(`${yyyy}-${mm}-${dd}`).getDate() !== dd) {
    return { valid: false, message: 'Invalid date' }
  }

  if (customValidator) {
    return customValidator(value)
  }

  return { valid: true }
}

export interface IDateState {
  dd: string
  mm: string
  yyyy: string
}

export const DateTextInput: React.FC<IDateProps> = props => {
  const ddRef = createRef<HTMLInputElement>()
  const mmRef = createRef<HTMLInputElement>()
  const yyyyRef = createRef<HTMLInputElement>()
  const [validity, setValidity] = useState<IValidity>({
    valid: true,
    message: ''
  })

  const [value, setValue] = useState<IDateState>(props.initialValue || {
    dd: '',
    mm: '',
    yyyy: ''
  })

  const finalizeChange = (event: React.FormEvent<HTMLInputElement>, newValue: IDateState) => {
    setValue(newValue)
    setValidity(validate(newValue))
    props.onDateChange?.(event, newValue, validity.valid)
  }

  const ddFocusNextField = () => {
    if (props.format === 'DD/MM/YYYY') {
      return mmRef.current?.focus()
    }
    return yyyyRef.current?.focus()
  }

  const mmFocusNextField = () => {
    if (props.format === 'MM/DD/YYYY') {
      return ddRef.current?.focus()
    }
    return yyyyRef.current?.focus()
  }

  const ddmmChange = (event: React.FormEvent<HTMLInputElement>, ref: 'dd' | 'mm') => {
    const arr = event.currentTarget.value.split('')

    if (arr.length === 0) {
      return finalizeChange(event, { ...value, [ref]: event.currentTarget.value })
    }

    if (arr.length === 1) {
      const d = parseInt(arr[0])
      // 4x invalid for days, 2x invalid for months
      if (d >= (ref === 'dd' ? 4 : 2)) {
        const newValue = { ...value, [ref]: `0${d}` } 
        finalizeChange(event, newValue)
        if (ref === 'dd') {
          return ddFocusNextField()
        }
        return mmFocusNextField()
      }

      const newValue = { ...value, [ref]: event.currentTarget.value }
      finalizeChange(event, newValue)
    }

    if (arr.length >= 2) {
      const newValue = {...value, [ref]: arr.splice(0, 2).join('') }
      finalizeChange(event, newValue)

      if (ref === 'dd') {
        return ddFocusNextField()
      }
      return mmFocusNextField()
    }
  }

  const yyyyChange = (event: React.FormEvent<HTMLInputElement>) => {
    const arr = event.currentTarget.value.split('')

    if (arr.length >= 4) {
      // do not allow 5 digits
      // TODO: update this in the year 9999 to support 5 digits
      const newVal = { ...value, yyyy: arr.splice(0, 4).join('')  }
      return finalizeChange(event, newVal)
    }

    const newVal = { ...value, yyyy: event.currentTarget.value }
    finalizeChange(event, newVal)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, ref: 'dd' | 'mm' | 'yyyy') => {
    if (ref === 'dd' && props.format === 'MM/DD/YYYY' && value.dd === '' && (event.key === 'Backspace' || event.keyCode === 8)) {
      mmRef.current?.focus()
    }

    if (ref === 'mm' && props.format === 'DD/MM/YYYY' && value.mm === '' && (event.key === 'Backspace' || event.keyCode === 8)) {
      ddRef.current?.focus()
    }

      // leaving the yyyy box
    if (ref === 'yyyy' && value.yyyy === '' && (event.key === 'Backspace' || event.keyCode === 8)) {
      if (props.format === 'DD/MM/YYYY') {
        return mmRef.current?.focus()
      }

      ddRef.current?.focus()
    }
  }

  const fieldClass = validity.valid ? 'ui-form co-input' : 'ui-form form-field-invalid co-input'

  const ddField = (
    <input
      ref={ddRef}
      type='text'
      name='dd'
      className='co-date-input co-date-two-digits'
      value={value.dd}
      placeholder='DD'
      onKeyDown={e => onKeyDown(e, 'dd')}
      onChange={e => ddmmChange(e, 'dd')}
    />
  )

  const mmField = (
    <input
      ref={mmRef}
      type='text'
      name='mm'
      placeholder='MM'
      className='co-date-input co-date-two-digits'
      value={value.mm}
      onKeyDown={e => onKeyDown(e, 'mm')}
      onChange={e => ddmmChange(e, 'mm')}
    />
  )

  const yyyyField = (
    <input
      ref={yyyyRef}
      type='text'
      name='yyyy'
      className='co-date-input co-date-four-digits'
      placeholder='YYYY'
      value={value.yyyy}
      onKeyDown={e => onKeyDown(e, 'yyyy')}
      onChange={yyyyChange}
    />
  )


  const fields = props.format === 'DD/MM/YYYY' ? (
    <React.Fragment>
      {ddField}
      <span className='co-date-slash'>/</span>
      {mmField}
      <span className='co-date-slash'>/</span>
      {yyyyField}
    </React.Fragment>
  ) : (
      <React.Fragment>
        {mmField}
        <span className='co-date-slash'>/</span>
        {ddField}
      <span className='co-date-slash'>/</span>
      {yyyyField}
      </React.Fragment>
    )

  return (
    <div className={props.className}>
      <Label
        label={props.label}
        error={validity.message}
      />
      <div className={fieldClass}>
        {fields}
      </div>
    </div>
  )
}
