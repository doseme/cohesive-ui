import React, { createRef, useState } from 'react'

import { Label } from '../Label'
import './index.scss'

export interface IDateProps extends React.HTMLAttributes<HTMLInputElement>{
  label?: string
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

export const Date: React.FC<IDateProps> = props => {
  const ddRef = createRef<HTMLInputElement>()
  const mmRef = createRef<HTMLInputElement>()
  const yyyyRef = createRef<HTMLInputElement>()
  const [validity, setValidity] = useState<IValidity>({
    valid: true,
    message: ''
  })

  const [value, setValue] = useState<IDateState>({
    dd: '',
    mm: '',
    yyyy: ''
  })

  const ddChange = (event: React.FormEvent<HTMLInputElement>) => {
    const arr = event.currentTarget.value.split('')

    if (arr.length === 0) {
      return setValue({ ...value, dd: event.currentTarget.value })
    }

    if (arr.length === 1) {
      const d = parseInt(arr[0])
      if (d >= 4) {
        setValue({ ...value, dd: `0${d}` })
        setValidity(validate({ ...value, dd: `0${d}` }))
        return mmRef.current?.focus()
      }

      setValidity(validate({ ...value, dd: event.currentTarget.value }))
      return setValue({ ...value, dd: event.currentTarget.value })
    }

    if (arr.length >= 2) {
      const val = arr.splice(0, 2).join('')
      setValue({ ...value, dd: val })
      setValidity(validate({ ...value, dd: val }))
      return mmRef.current?.focus()
    }

    setValidity(validate({ ...value, dd: event.currentTarget.value }))
  }

  const mmChange = (event: React.FormEvent<HTMLInputElement>) => {
    const arr = event.currentTarget.value.split('')

    if (arr.length === 0) {
      return setValue({ ...value, mm: event.currentTarget.value })
    }

    if (arr.length === 1) {
      const d = parseInt(arr[0])
      if (d >= 2) {
        setValue({ ...value, mm: `0${d}` })
        setValidity(validate({ ...value, mm: `0${d}`}))
        return yyyyRef.current?.focus()
      }

      setValidity(validate({ ...value, mm: event.currentTarget.value }))
      return setValue({ ...value, mm: event.currentTarget.value })
    }

    if (arr.length >= 2) {
      const val = arr.splice(0, 2).join('')
      setValue({ ...value, mm: val })
      setValidity(validate({ ...value, mm: val }))
      return yyyyRef.current?.focus()
    }
  }

  const yyyyChange = (event: React.FormEvent<HTMLInputElement>) => {
    const arr = event.currentTarget.value.split('')

    if (arr.length >= 4) {
      // do not allow 5 digits
      // TODO: update this in the year 9999 to support 5 digits
      const newVal = arr.splice(0, 4).join('')
      setValidity(validate({ ...value, yyyy: newVal }))
      return setValue({ ...value, yyyy: newVal })
    }

    setValue({ ...value, yyyy: event.currentTarget.value })
    setValidity(validate({ ...value, yyyy: event.currentTarget.value }))
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, ref: 'mm' | 'yyyy') => {
    if (value.mm === '' && ref === 'mm' && (event.key === 'Backspace' || event.keyCode === 8)) {
      ddRef.current?.focus()
    }

    if (value.yyyy === '' && ref === 'yyyy' && (event.key === 'Backspace' || event.keyCode === 8)) {
      mmRef.current?.focus()
    }
  }

  const fieldClass = validity.valid ? 'ui-form co-input' : 'ui-form form-field-invalid co-input'

  return (
    <div className={props.className}>
      <Label
        label={props.label}
        error={validity.message}
      />
      <div className={fieldClass}>
        <input
          ref={ddRef}
          type='text'
          name='dd'
          className='co-date-input co-date-two-digits'
          value={value.dd}
          placeholder='DD'
          onChange={ddChange}
        />

        <span className='co-date-slash'>/</span>

        <input
          ref={mmRef}
          type='text'
          name='mm'
          placeholder='MM'
          className='co-date-input co-date-two-digits'
          value={value.mm}
          onKeyDown={e => onKeyDown(e, 'mm')}
          onChange={mmChange}
        />

        <span className='co-date-slash'>/</span>

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
      </div>
    </div>
  )
}