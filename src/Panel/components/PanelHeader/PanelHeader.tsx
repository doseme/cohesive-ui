import React from 'react'
import classnames from 'classnames'

import { IPanelHeaderProps } from '../../Panel'
import { Spinner } from '../../../Spinner'
import { ThinSpinner } from '../../../Icons/ThinSpinner'

import './index.scss'
import { ProgressPlugin } from 'webpack'

const PanelHeader: React.FC<IPanelHeaderProps> = ({ title, info, headerClass, loading }) => {
  if (!title) {
    return null
  }
  const className = classnames(headerClass, 'panel-header d-flex align-items-center')
  const spinner = loading && (
    <div className='co-panel-header-spinner'>
      <ThinSpinner
        strokeWidth={8}
        r={15}
        stroke='white'
        width='40px'
      />
    </div>
  )

  return (
    <div className={className}>
      <div className='co-panel-header-title'>{title}</div>
      {spinner}
    </div>
  )
}

export {
  PanelHeader
}
