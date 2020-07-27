import React, { useState, useRef, useEffect, Ref, RefObject } from 'react'
import classnames from 'classnames'

import { SearchInput } from '../SearchInput'
import './index.scss'

export interface IDropdownItem {
  label?: string
  disabled?: boolean
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

const useClickAway = (ref: RefObject<HTMLDivElement>, isRequired?: boolean, onBlur?: Function) => {
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>()
  const [valid, setValid] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [touched, setTouched] = useState(false)

  useEffect(() => {
    const handleClickAway = (e: any) => {
      if (ref && ref.current && ref.current.contains(e.target)) {
        return
      }

      setShowContent(false)
      setSearchText('')

      if (isRequired && !selectedItem) {
        setValid(false)
      } else {
        setValid(true)
      }

      if (onBlur) {
        onBlur(null, false)
      }
    }

    document.addEventListener('mousedown', (e: MouseEvent) => {
      handleClickAway(e)
    })

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [ref])

  return {
    selectedItem, setSelectedItem,
    valid, setValid,
    showContent, setShowContent,
    searchText, setSearchText,
    touched, setTouched
  }
}

const Dropdown: React.FC<IProps> = ({ id, className, children, label, isRequired, data, placeholder, defaultValue, onSelect, onBlur, showSearchThreshold = 10 }) => {
  const node = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)

  const{
    selectedItem, setSelectedItem,
    valid, setValid,
    showContent, setShowContent,
    searchText, setSearchText,
    touched, setTouched
  } = useClickAway(node, isRequired, onBlur)

  useEffect(() => {
    if (defaultValue && data) {
      setSelectedItem(data.find(x => x.value === defaultValue))
    }
  }, [defaultValue, data, setSelectedItem])

  useEffect(() => {
    if (showContent && searchRef?.current) {
      searchRef.current.focus()
    }
  }, [showContent, searchRef.current])

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
        childRef={searchRef}
      />
    </div>
  )

  const update = (item: IDropdownItem): void => {
    setValid(true)

    if (onBlur) {
      onBlur(item, true)
    }

    if (onSelect) {
      onSelect(item)
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
              className={classnames({ 'co-dropdown-item-disabled': item.disabled })}
              onClick={() => {
                  if (item.disabled) {
                    return
                  }
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
    <div className={classnames('co-form-field-label', { 'co-form-field-label-invalid': !valid })}>
      <small>Required</small>
    </div>
  )

  return (
    <div className={className}>
      <div className='d-flex justify-content-between co-dropdown-label'>
        <div className='co-form-field-label'>
          {label}
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
          onClick={() => {
            setTouched(true)
            setShowContent(!showContent)}
          }
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
