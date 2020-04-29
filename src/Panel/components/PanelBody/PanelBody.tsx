import React from 'react'

import { IPanelBodyProps } from '../../Panel'
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
