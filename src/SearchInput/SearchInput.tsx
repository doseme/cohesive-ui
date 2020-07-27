import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { TExtendsHTMLElement } from '../types'
import './index.scss'

interface IProps {
  value: string
  onChange: (value: string) => any
  customSearchIcon?: any
  placeholder?: string
  childRef?: React.RefObject<HTMLInputElement>
}

const SearchInput: React.FC<TExtendsHTMLElement<IProps>> = (props): JSX.Element => {
  const [readOnly, setReadonly] = useState(true)
  const handleChange = (e: React.FormEvent<any>) => {
    const value = e.currentTarget && e.currentTarget.value
    props.onChange(value || '')
  }

  const icon = props.customSearchIcon || (
    <FontAwesomeIcon
      className='search-icon'
      icon={faSearch}
    />
  )

  const suppressAutocomplete = (event: any) => {
    setReadonly(false)
    event.target.setAttribute('autocomplete', 'disabled')
  }

  return (
    <div className='search-outer'>
      <div className='search-wrapper'>
        <input
          autoComplete='disabled' // prevents Chrome's moronic autocomplete
          readOnly={readOnly}
          onFocus={suppressAutocomplete}
          name='search-patients'
          data-testid='search-input'
          placeholder={props.placeholder || 'Search'}
          className='smart-list-search'
          type='search'
          value={props.value}
          onChange={handleChange}
          ref={props.childRef}
        />
        <div className='co-search-icon'>
          {icon}
        </div>
      </div>
    </div>
  )
}

export { SearchInput }
