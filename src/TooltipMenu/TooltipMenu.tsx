import React from 'react'

import './index.scss'

export interface IData { 
  id: string | number
  value: string
  element?: JSX.Element
}

export interface IProps {
  data: IData[]
  onSelect?: (item: IData) => any
  style?: object
}

const Triangle = () => (
  <div className='arrow-up'></div>
)

const TooltipMenu: React.FC<IProps> = (props) => {
  const onSelect = (item: IData) => props.onSelect ? props.onSelect(item) : {}

  const items = props.data.map(x => (
    <li 
      key={x.id} 
      className='d-flex align-items-center' 
      onClick={() => onSelect(x)}
    >
      {x.element ? x.element : x.value}
    </li>
  ))

  return (
    <div className='co-tooltip-outer' style={props.style}>
      <Triangle />
      <div className='co-tooltip-wrapper'>
        <ul className='co-tooltip-wrapper-list'>
          {items}
        </ul>
      </div>
    </div>
  )
}

export {
  TooltipMenu
}
