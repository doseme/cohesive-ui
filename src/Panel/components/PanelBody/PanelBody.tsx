import React from 'react'

import { IProps } from '../../types'
import './index.scss'

const PanelBody: React.FC<IProps> = ({ bodyClassName, children }) => {
  return (
    <div className={`panel ${bodyClassName}`}>
      {children}
    </div>
  )
}

export {
  PanelBody
}
