import React, { useState, useRef, useEffect, HTMLProps } from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'

import { Button } from '../Button'
import './index.scss'

interface IDropdownItem {
  label?: string
  value: string
}

interface OverrideProps {
  label?: string
  className?: string
  isRequired?: boolean
  data?: IDropdownItem[]
  placeholder: string
  onSelect?: (item: string) => void
  searchIcon?: JSX.Element
  showSearchThreshold?: number
  defaultIndex?: number
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

type TProps = Omit<HTMLProps<HTMLElement>, keyof OverrideProps> & OverrideProps

const Dropdown: React.FC<TProps> = ({ id, className, children, label, isRequired, data, placeholder, defaultIndex, searchIcon, onSelect, showSearchThreshold = 10 }) => {
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
    if (defaultIndex && data) {
      setSelectedItem(data[defaultIndex])
    }
  }, [defaultIndex, data, setSelectedItem])

  const handleChange = (e: React.FormEvent<any>) => {
    if (e.currentTarget.value) {
      setSearchText(e.currentTarget.value.toString().toLowerCase())
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

  const listItems = (items: IDropdownItem[], callback: (item: string) => void) => (
    <>
      <div 
        className='dropdown-placeholder'
        data-test-placeholder
      >{selectedItem ? selectedItem.label || selectedItem.value : placeholder}</div>

      {data && data.length > showSearchThreshold && searchInput}

      <ul className='dropdown-list'>
        {
          items.map(item =>
            <li 
              data-test={item.label || item.value}
              key={item.value}
              onClick={() => {
                  setSelectedItem(item)
                  callback(item.value)
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

  const defaultLabel = defaultIndex && (data ? (data[defaultIndex].label || data[defaultIndex].value) : undefined)

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
    <div className={className}>
      <div className='d-flex'>
        <div className='form-field-label'>{label}{isRequired ? '*' : ''}</div>
      </div>

      <div
        id={id ? id : undefined}
        className='dropdown-wrapper' 
        ref={node}
      >
        <div
          className='dropdown-closed'
          data-test-current-item
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
