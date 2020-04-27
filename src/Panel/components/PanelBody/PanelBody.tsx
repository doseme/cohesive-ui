import React from 'react'

import { IPanelBodyProps } from '../../types'
import './index.scss'

const PanelBody: React.FC<IPanelBodyProps> = ({ bodyClassName, children }) => {
  return (
    <div className={`panel ${bodyClassName}`}>
      {children}
    </div>
  )
}

export {
  PanelBody
}
