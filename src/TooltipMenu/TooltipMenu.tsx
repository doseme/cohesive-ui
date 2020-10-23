import React, { useRef, useEffect, useState } from 'react'

import './index.scss'


export interface ITooltipMenuData { 
  id: string | number
  value: string
  element?: JSX.Element
}

export interface ITooltipMenuProps {
  data: ITooltipMenuData[]
  onSelect?: (item: ITooltipMenuData) => any
  style?: object
  open: boolean 
  onClickaway: () => any
  search?: boolean
  onSearch?: (term: string) => void 
  placeholder?: string
}

const Triangle = () => (
  <div className='arrow-up'></div>
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
    if (!props.onSelect) {
      return
    }

    props.onSelect(item) 
    props.onClickaway()
  }

  const items = props.data.map(x => (
    <li 
      key={x.id} 
      className='d-flex align-items-center' 
      onClick={() => handleSelect(x)}
    >
      {x.element ? x.element : x.value}
    </li>
  ))

  return (
    <div className='co-wrapper w-100' ref={node}>
      <Triangle />
      <div className='co-tooltip-outer w-100'>
        <div className='co-tooltip-wrapper'>
          <input 
            placeholder={props.placeholder} 
            className='co-tooltip-menu-search' 
            value={searchValue}
            onChange={e => setSearchValue(e.currentTarget.value)}
          />
          <ul className='co-tooltip-wrapper-list'>
            {items}
          </ul>
        </div>
      </div>
    </div>
  )
}

export {
  TooltipMenu
}
