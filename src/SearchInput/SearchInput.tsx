import React from 'react'
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

  return (
    <div className='search-outer'>
      <div className='search-wrapper'>
        <input
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
