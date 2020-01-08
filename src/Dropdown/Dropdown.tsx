import React, { useState, useRef, useEffect, HTMLProps } from 'react'
import { InputGroup, FormControl, FormControlProps, } from 'react-bootstrap'
import { ReplaceProps, BsPrefixProps } from 'react-bootstrap/helpers'

import { Button } from '../Button'
import './index.scss'

interface OverrideProps {
  label?: string
  isRequired?: boolean
  data?: string[]
  placeholder: string
  onSelect?: (item: string) => void
  searchIcon?: JSX.Element
  showSearchThreshold?: number
  defaultValue?: string
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type TProps = Omit<HTMLProps<HTMLElement>, keyof OverrideProps> & OverrideProps

const Dropdown: React.FC<TProps> = ({ id, children, label, isRequired, data, placeholder, defaultValue, searchIcon, onSelect, showSearchThreshold = 10 }) => {
  const [showContent, setShowContent] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [selectedItem, setSelectedItem] = useState('')
  const node = useRef<HTMLDivElement>(null)

  const handleClickAway = (e: MouseEvent) => {
    // @ts-ignore - I dunno how to type this, whatever
    if (node && node.current && node.current.contains(e.target)) {
      return
    }

    setSearchText('')
    setShowContent(false)
  }

  useEffect(() => {
    document.addEventListener('mousedown', (e: MouseEvent) => {
      handleClickAway(e)
    })

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [handleClickAway])

  useEffect(() => {
    if (defaultValue && data && data.includes(defaultValue)) {
      setSelectedItem(defaultValue)
    }
  }, [defaultValue, data, setSelectedItem])

  const handleChange = (e: React.FormEvent<ReplaceProps<'input', BsPrefixProps<'input'> & FormControlProps>>) => {
    if (e.currentTarget.value) {
      setSearchText(e.currentTarget.value.toLowerCase())
      return
    }
    setSearchText('')
  }

  const searchInput = (
    <InputGroup className='dropdown-search'>
      <FormControl
        placeholder='Search...'
        aria-label='Search'
        onChange={handleChange}
      />
      {
        searchIcon && (
          <InputGroup.Append>
            <Button
              className='h-100'
              variant='light'
              onClick={() => {/***/ }}
            >
              {searchIcon}
            </Button>
          </InputGroup.Append>
        )
      }
    </InputGroup>
  )

  const listItems = (items: string[], callback: (item: string) => void) => (
    <>
      <div 
        className='dropdown-placeholder'
        data-test-placeholder
      >{selectedItem || placeholder}</div>

      {data && data.length > showSearchThreshold && searchInput}

      <ul>
        {
          items.map(item =>
            <li 
              data-test={item}
              key={item}
              onClick={() => {
                  setSelectedItem(item)
                  callback(item)
                  setShowContent(false)
                }
              }
            >
              {item}
            </li>
          )
        }
      </ul>
    </>
  )

  let filteredData = data;

  if (data && searchText) {
    filteredData = data.filter(x =>  x.toLowerCase().includes(searchText))
  }

  const getDefaultValue = defaultValue && (data && data.includes(defaultValue) ? defaultValue : undefined)

  const content = showContent 
    ? 
    (
      <div className='dropdown'>
        {
          filteredData && onSelect
            ? listItems(filteredData, onSelect)
            : children
        }
      </div>
    ) 
    : null

  return (
    <div
      id={id ? id : undefined}
      className='dropdown-wrapper' 
      ref={node}
    >
      <div className='d-flex'>
        <div className='form-field-label'>{label}{isRequired ? '*' : ''}</div>
      </div>
      <div
        className='dropdown-closed'
        data-test-current-item
        onClick={() => setShowContent(!showContent)}
      >
        {selectedItem || getDefaultValue || placeholder}
      </div>
      {content}
    </div>
  )
}

export {
  Dropdown
}
