import React, { useRef, useEffect } from 'react'

import './index.scss'

export interface IData { 
  id: string | number
  value: string
  element?: JSX.Element
}

export interface IProps {
  data: IData[]
  onSelect?: (item: IData) => any
  width?: string
  style?: object
  open: boolean 
  onClickaway: () => any
}

const Triangle = () => (
  <div className='arrow-up'></div>
)

const TooltipMenu: React.FC<IProps> = (props) => {
  const node = useRef<HTMLDivElement>(null)

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

  const handleSelect = (item: IData) => {
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
    <div className='co-wrapper' ref={node}>
      <Triangle />
      <div className='co-tooltip-outer' style={{ width: props.width || 'auto' }}>
        <div className='co-tooltip-wrapper'>
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
