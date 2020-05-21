import React from 'react'

import { IPanelHeaderProps } from '../../Panel'

import './index.scss'

const PanelHeader: React.FC<IPanelHeaderProps> = ({ title, info }) => {
  if (!title) {
    return null
  }

  return (
    <div className='panel-header d-flex align-items-center'>
      {title}
    </div>
  )
}

export {
  PanelHeader
}
