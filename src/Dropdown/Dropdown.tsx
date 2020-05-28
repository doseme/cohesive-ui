import React, { useState, useRef, useEffect } from 'react'
import classnames from 'classnames'

import { SearchInput } from '../SearchInput'
import './index.scss'

export interface IDropdownItem {
  label?: string
  value: string
}

interface IProps {
  id?: string
  label?: string
  className?: string
  isRequired?: boolean
  data?: IDropdownItem[]
  placeholder: string
  onSelect?: (item: IDropdownItem) => void
  onBlur?: (item: IDropdownItem | null, isValid: boolean) => any
  showSearchThreshold?: number
  defaultValue?: string
}

const Dropdown: React.FC<IProps> = ({ id, className, children, label, isRequired, data, placeholder, defaultValue, onSelect, onBlur, showSearchThreshold = 10 }) => {
  const [valid, setValid] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>()
  const node = useRef<HTMLDivElement>(null)

  const handleClickAway = (e: MouseEvent) => {
    // @ts-ignore - I dunno how to type this, whatever
    if (node && node.current && node.current.contains(e.target)) {
      return
    }

    setSearchText('')
    setShowContent(false)
    setValid(true)

    if (isRequired && !selectedItem) {
      setValid(false)

      if (onBlur) {
        onBlur(null, false)
      }
    }
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
    if (defaultValue && data) {
      setSelectedItem(data.find(x => x.value === defaultValue))
    }
  }, [defaultValue, data, setSelectedItem])

  const handleChange = (value: string) => {
    if (value) {
      setSearchText(value.toString().toLowerCase())
      return
    }
    setSearchText('')
  }

  const searchInput = (
    <div className='co-dropdown-search'>
      <SearchInput
        placeholder='Search...'
        aria-label='Search'
        onChange={handleChange}
        value={searchText}
      />
    </div>
  )

  const update = (item: IDropdownItem): void => {
    setValid(true)

    if (onBlur) {
      onBlur(item, true)
    }
  }

  const listItems = (items: IDropdownItem[]) => (
    <>
      <div 
        className='co-dropdown-placeholder'
        data-testid='placeholder'
      >{selectedItem ? selectedItem.label || selectedItem.value : placeholder}</div>

      {data && data.length > showSearchThreshold && searchInput}

      <ul className='co-dropdown-list'>
        {
          items.map(item =>
            <li 
              data-testid={item.label || item.value}
              key={item.value}
              onClick={() => {
                  setSelectedItem(item)
                  update(item)
                  setSearchText('')
                  setShowContent(false)
                }
              }
            >
              {item.label || item.value}
            </li>
          )
        }
      </ul>
    </>
  )

  let filteredData = data;

  if (data && searchText) {
    filteredData = data.filter(x => (x.label || x.value).toLowerCase().includes(searchText))
  }

  let defaultLabel: string | undefined

  if (defaultValue && data && data.length) {
    const defaultItem = data.find(x => x.value === defaultValue)
    if (defaultItem) {
      defaultLabel = defaultItem.label || defaultItem.value
    }
  }

  const content = showContent 
    ? 
    (
      <div className='co-dropdown'>
        {
          filteredData && onSelect
            ? listItems(filteredData)
            : children
        }
      </div>
    ) 
    : null

  const errorMessage = !valid && (
    <div className={classnames('form-field-label', { 'form-field-label-invalid': !valid })}>
      This field is required
    </div>
  )

  return (
    <div className={className}>
      <div className='d-flex justify-content-between co-dropdown-label'>
        <div className='form-field-label'>
          {label}{isRequired ? '*' : ''}
        </div>
        {errorMessage}
      </div>

      <div
        id={id ? id : undefined}
        className='co-dropdown-wrapper' 
        ref={node}
      >
        <div
          className={classnames('co-dropdown-closed', { 'co-dropdown-invalid': !valid })}
          data-testid='current-item'
          onClick={() => setShowContent(!showContent)}
        >
          {selectedItem && (selectedItem.label || selectedItem.value) || defaultLabel || placeholder}
        </div>
        {content}
      </div>
    </div>
  )
}

export {
  Dropdown
}
