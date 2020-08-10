import React from 'react'
import classnames from 'classnames'

import './index.scss'

const Container: React.FC<React.HTMLAttributes<HTMLDivElement> & { fluid?: boolean }> = (props) => {
  let className = classnames(props.className, 'co-container', { 'co-container-fluid': props.fluid })

  return <div {...props} className={className}>{props.children}</div>
}

export {
  Container
}
