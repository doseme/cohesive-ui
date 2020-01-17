
import React, { HTMLProps } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { FormControlProps } from 'react-bootstrap'
import './index.scss'

export type TExtendsHTMLElement<T> = Omit<HTMLProps<HTMLElement>, keyof T> & T

interface IProps {
  value: string
  onChange: (value: string) => any
}

const SearchInput: React.FC<TExtendsHTMLElement<IProps>> = (props): JSX.Element => {
  const handleChange = (e: React.FormEvent<ReplaceProps<'input', BsPrefixProps<'input'> & FormControlProps>>) => {
    if (e.currentTarget.value) {
      props.onChange(e.currentTarget.value)
    } 
  }

  return (
    <div className='search-wrapper'>
      <InputGroup>
      <Form.Control
        placeholder='Search'
        className='smart-list-search'
        type='text'
        value={props.value}
        onChange={handleChange}
      />
        <InputGroup.Append>
          <InputGroup.Text className='search-icon-wrapper'>
            <FontAwesomeIcon
              className='m-2 search-icon'
              icon={faSearch}
            />
          </InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}

export { SearchInput }