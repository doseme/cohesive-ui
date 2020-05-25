import React from 'react'
import classnames from 'classnames'

import { IPanelHeaderProps } from '../../Panel'

import './index.scss'

const PanelHeader: React.FC<IPanelHeaderProps> = ({ title, info, headerClass }) => {
  if (!title) {
    return null
  }
  const className = classnames(headerClass, 'panel-header d-flex align-items-center')

  return (
    <div className={className}>
      {title}
    </div>
  )
}

export {
  PanelHeader
}
