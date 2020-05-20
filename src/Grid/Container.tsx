import React from 'react'

import './index.scss'

interface IProps {
  style?: Record<string, any>
  className?: string
  fluid?: boolean
}

const Container: React.FC<IProps> = (props) => {
  const style = props.style || {}
  let className = 'co-container'
  if (props.fluid) {
    className += ' co-container-fluid'
  }
  return <div style={style} className={className}>{props.children}</div>
}

export {
  Container
}
