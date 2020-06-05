import React, { useRef, useEffect } from 'react'
// @ts-ignore
import * as ToolTip from 'react-portal-tooltip'

import './index.scss'

export interface ITooltipMenuItem { 
  id: string
  value: string
  element?: JSX.Element
}

export interface ITooltipProps {
  parent: string
  active: boolean
  position: 'top' | 'bottom' | 'left' | 'right'
  arrow: 'center' | 'left' | 'right'
  data: ITooltipMenuItem[]
  onClickAway: () => any
}

let style = {
  arrowStyle: {},
  style: {
    background: 'white',
    padding: '0',
    margin: '0',
    transition: 'none'
  }
}


const Tooltip: React.FC<ITooltipProps> = props => {
  const node = useRef<HTMLUListElement>(null)

  const handleClickAway = (e: MouseEvent) => {
    // @ts-ignore - I dunno how to type this, whatever
    if (node && node.current && node.current.contains(e.target)) {
      return
    }

    props.onClickAway()
  }

  useEffect(() => {
    document.addEventListener('mousedown', (e: MouseEvent) => {
      handleClickAway(e)
    })

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [handleClickAway])


  const items = props.data.map(item => (
    <li 
      className='co-tooltip-item'
      key={item.id}
    >
      {item.element || item.value}
    </li>
  ))

  return (
    <ToolTip.default
      style={style}
      active={props.active}
      parent={props.parent}
      position={props.position}
      arrow={props.arrow}
      tooltipTimeout={0}
    >
      <ul 
        className='co-tooltip-items'
        ref={node}
      >
        {items}
      </ul>
    </ToolTip.default>
  )
}

export {
  Tooltip
}