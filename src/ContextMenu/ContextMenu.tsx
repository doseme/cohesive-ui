import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import './index.scss'

export interface IListItem {
  id: number | string
  icon: JSX.Element
  text: string
  onClick?: () => any
}

interface IProps {
  header?: string
  items: IListItem[]
}

const ContextMenu: React.FC<IProps> = (props): JSX.Element => {
  const header = props.header && (
    <ListGroup.Item 
      data-test-head
      className='context-menu-header d-flex align-items-center'
    >
      {props.header}
    </ListGroup.Item>
  )

 const items = props.items.map(item =>
    <ListGroup.Item 
      key={item.id} 
      data-test-item
      className='d-flex align-items-center context-menu-item pt-2 pb-2 pl-4 pr-4'
      onClick={item.onClick}
    >
      <span className='icon'>{item.icon}</span> 
      <span className='item-text'>{item.text}</span>
    </ListGroup.Item>
  )

  return (
    <ListGroup className='context-menu'>
      {header}
      {items}
    </ListGroup>
  )
}

export { ContextMenu }
