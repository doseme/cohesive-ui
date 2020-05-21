import React, { HTMLProps } from 'react'
import classnames from 'classnames'

import './index.scss'

type TProps = HTMLProps<HTMLDivElement> & { fluid?: boolean }

const Container: React.FC<TProps> = (props) => {
  let className = classnames('co-container', { 'co-container-fluid': props.fluid })

  return <div className={className}>{props.children}</div>
}

export {
  Container
}
