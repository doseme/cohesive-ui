import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FormControl } from 'react-bootstrap'

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

  return (
    <div className='search-wrapper'>
      <InputGroup>
        <Form.Control
          data-testid='search-input'
          name='asdf'
          placeholder={props.placeholder || 'Search'}
          className='smart-list-search'
          type='text'
          value={props.value}
          onChange={handleChange}
        />
        <InputGroup.Append>
          <InputGroup.Text className='search-icon-wrapper'>
            {props.customSearchIcon || <FontAwesomeIcon
              className='m-2 search-icon'
              icon={faSearch}
            />}
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

export { SearchInput }
