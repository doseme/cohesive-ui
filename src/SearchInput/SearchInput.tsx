import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { TExtendsHTMLElement } from '../types'
import './index.scss'

interface IProps {
  value: string
  onChange: (value: string) => any
  customSearchIcon?: any
  placeholder?: string
}

const SearchInput: React.FC<TExtendsHTMLElement<IProps>> = (props): JSX.Element => {
  const input = useRef<HTMLInputElement>(null)
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

  const onFocus = () => {
    input.current?.removeAttribute('readonly')
  }

  return (
    <div className='search-outer'>
      <div className='search-wrapper'>
        <input
          ref={input}
          readOnly={true}
          autoComplete='none'
          onFocus={onFocus}
          data-testid='search-input'
          placeholder={props.placeholder || 'Search'}
          className='smart-list-search'
          type='text'
          value={props.value}
          onChange={handleChange}
        />
        <div className='co-search-icon'>
          {icon}
        </div>
      </div>
    </div>
  )
}

export { SearchInput }
