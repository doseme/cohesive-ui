import React, { useRef, useEffect, useState } from 'react'

import './index.scss'


export interface ITooltipMenuData { 
  id: string | number
  value: string
  element?: JSX.Element
  onSelect?: () => void
}

export interface ITooltipMenuProps {
  data: ITooltipMenuData[]
  emptySearchText?: string
  style?: object
  alignRight?: boolean
  chevronOffset?: number // This is the offset of the menu arrowtip. Min recommended 10px, defaults to 25px.
  open: boolean 
  search?: boolean
  placeholder?: string
  onSelect?: (item: ITooltipMenuData) => any
  onClickaway: () => any
  onSearch?: (term: string) => void 
}

const Triangle = (props: { alignRight?: boolean, chevronOffset?: number } ) => (
  <div
    className='arrow-up'
    style={props.alignRight
      ? {
        right: props.chevronOffset === undefined ? '25px' : `${props.chevronOffset}px`
      }
      : {
        left: props.chevronOffset === undefined ? '25px' : `${props.chevronOffset}px`
      }
    }
  ></div>
)

const TooltipMenu: React.FC<ITooltipMenuProps> = (props) => {
  const node = useRef<HTMLDivElement>(null)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (props.onSearch) {
      props.onSearch(searchValue)
    }
  }, [searchValue])

  const handleClickAway = (e: MouseEvent) => {
    // @ts-ignore - I dunno how to type this, whatever
    if (node && node.current && node.current.contains(e.target)) {
      return
    }
    setSearchValue('')
    props.onClickaway()
  }

  useEffect(() => {
    document.addEventListener('mousedown', (e: MouseEvent) => {
      handleClickAway(e)
    })

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [handleClickAway])

  if (!props.open) {
    return <React.Fragment />
  }

  const handleSelect = (item: ITooltipMenuData) => {
    // Override menu onSelect callback if item level callback specified.
    if (item.onSelect) {
      item.onSelect()
      props.onClickaway()
      return
    }

    if (props.onSelect) {
      props.onSelect(item)
      props.onClickaway()
    }
  }

  const items = props.data.map(x => (
    <li 
      key={x.id} 
      data-testid={`tooltip-item-${x.id}`}
      className='d-flex align-items-center' 
      onClick={() => handleSelect(x)}
    >
      {x.element ? x.element : x.value}
    </li>
  ))

  const noResultsFound = props.search && items.length === 0 && (
    <li 
      key='no-items'
      className='d-flex align-items-center' 
      data-testid='co-tooltip-menu-no-data'
    >
      {props.emptySearchText || 'No results found.'}
    </li>
  )

  return (
    <div className='co-wrapper w-100' ref={node}>
      <Triangle
        alignRight={props.alignRight}
        chevronOffset={props.chevronOffset}
      />
      <div className='co-tooltip-outer w-100'>
        <div className='co-tooltip-wrapper'>
          {props.search && <input 
            placeholder={props.placeholder} 
            className='co-tooltip-menu-search' 
            value={searchValue}
            onChange={e => setSearchValue(e.currentTarget.value)}
          />}
          <ul className={`co-tooltip-wrapper-list ${props.search ? 'co-tooltip-list-scroll' : ''}`}>
            {items}
            {noResultsFound}
          </ul>
        </div>
      </div>
    </div>
  )
}

export {
  TooltipMenu
}
