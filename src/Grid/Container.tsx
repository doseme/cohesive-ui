import React from 'react'

import './index.scss'

interface IProps {
  style?: Record<string, any>
  className?: string
  maxWidth?: boolean
}

const Container: React.FC<IProps> = (props) => {
  const style = props.style || {}
  const maxWidth =  props.maxWidth ? '60rem' : 'none'
  return <div style={{ ...style, maxWidth }} className='co-container'>{props.children}</div>
}

export {
  Container
}
