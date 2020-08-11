import React, { useState, useRef, useEffect, Ref, RefObject, isValidElement } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import classnames from 'classnames'

import { SearchInput } from '../SearchInput'
import './index.scss'
import { ILabelProps } from '../Label'

export interface IDropdownItem {
  label?: string
  disabled?: boolean
  value: string
}

interface IProps extends ILabelProps {
  id?: string
  label?: string
  className?: string
  isRequired?: boolean
  data: IDropdownItem[]
  disabled?: boolean
  placeholder: string
  showSearchThreshold?: number
  value?: string
  onBlur?: (item: IDropdownItem | null, isValid: boolean) => any
  onSelect: (item: IDropdownItem) => void
}

const Dropdown: React.FC<IProps> = (props) => {
  const node = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLInputElement>(null)
  const [valid, setValid] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [touched, setTouched] = useState(false)

  const selectedItem = props.data.find(x => x.value === props.value)

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

  const onClose = () => {
    if (touched && props.isRequired && !selectedItem) {
      setValid(false)
    }
    setShowContent(false)
    setSearchText('')
  }

  useOnClickOutside(node, onClose)

  const update = (item: IDropdownItem): void => {
    setValid(true)

    if (props.onBlur) {
      props.onBlur(item, true)
    }

    if (props.onSelect) {
      props.onSelect(item)
    }
  }

  const searchInput = props.showSearchThreshold !== undefined && props.data.length >= props.showSearchThreshold ? (
    <div className='co-dropdown-search'>
      <SearchInput
        placeholder='Search...'
        aria-label='Search'
        onChange={handleChange}
        value={searchText}
        childRef={searchRef}
      />
    </div>
  ) : null

  const listItems = (items: IDropdownItem[]) => (
    <>
      <div 
        className='co-dropdown-placeholder'
        data-testid='placeholder'
      >{selectedItem ? selectedItem.label || selectedItem.value : props.placeholder}</div>

      {searchInput}
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
                  props.onSelect(item)
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

  let filteredData = props.data;

  if (props.data && searchText) {
    filteredData = props.data.filter(x => (x.label || x.value).toLowerCase().includes(searchText))
  }

  let defaultLabel: string | undefined

  if (selectedItem) {
    defaultLabel = selectedItem.label || selectedItem.value
  }

  const content = showContent && (
    <div className='co-dropdown'>
      {
        filteredData && props.onSelect
          ? listItems(filteredData)
          : props.children
      }
    </div>
  ) 

  const errorMessage = !valid && (
    <div className={classnames('co-form-field-label', { 'co-form-field-label-invalid': !valid })}>
      <small>Required</small>
    </div>
  )

  return (
    <div className={props.className}>
      <div className='d-flex justify-content-between co-dropdown-label'>
        <div className='co-form-field-label'>
          {props.label} 
          {props.showOptional && <span className='co-form-field-optional-label'>(Optional)</span>}
        </div>
        {errorMessage}
      </div>

      <div
        id={props.id ? props.id : undefined}
        className='co-dropdown-wrapper' 
        ref={node}
      >
        <div
          className={classnames('co-dropdown-closed', { 
            'co-dropdown-invalid': !valid, 
            'co-dropdown-no-options': props.data.length === 0,
            'co-dropdown-disabled': props.disabled
          })}
          data-testid='current-item'
          onClick={() => {
            if (props.data.length === 0) {
              return
            }
            setShowContent(!showContent)
            setTouched(true)
          }}
        >
          {selectedItem && (selectedItem.label || selectedItem.value) || defaultLabel || props.placeholder}
        </div>
        {content}
      </div>
    </div>
  )
}

export {
  Dropdown
}
