import React from 'react'

import './index.scss'

export interface IListItem {
  id: number | string
  icon?: JSX.Element
  text: string
  onClick?: () => any
}

interface IProps {
  header?: string
  items: IListItem[]
}

export const ContextMenu: React.FC<IProps> = (props): JSX.Element => {
  const header = props.header && (
    <li
      data-test-head
      className='context-menu-header d-flex align-items-center pl-4 pr-4'
    >
      {props.header}
    </li>
  )

 const items = props.items.map(item =>
    <li
      key={item.id} 
      data-test-item
      className='d-flex align-items-center context-menu-item pt-2 pb-2 pl-4 pr-4'
      onClick={item.onClick}
    >
      <span className='icon'>{item.icon}</span> 
      <span className='item-text'>{item.text}</span>
    </li>
  )

  return (
    <ul className='context-menu'>
      {header}
      {items}
    </ul>
  )
}
