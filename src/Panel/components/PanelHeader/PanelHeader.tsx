import React from 'react'
import * as BS from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { IPanelHeaderProps } from '../../types'

import './index.scss'

const PanelHeader: React.FC<IPanelHeaderProps> = ({ title, info }) => {
  const getInfo = (): JSX.Element | null => {
    if (info) {
      return (
        <span className='info-icon'>
          <BS.OverlayTrigger
            placement='top'
            overlay={
              <BS.Tooltip id='tooltip-tdm'>
                {info}
              </BS.Tooltip>
            }
          >
            <FontAwesomeIcon
              className='ml-1'
              icon={faQuestionCircle}
            />
          </BS.OverlayTrigger>
        </span>
      )
    }

    return null
  }

  if (!title) {
    return null
  }

  return (
    <div className='panel-header d-flex align-items-center'>
      {title}
      {getInfo()}
    </div>
  )
}

export {
  PanelHeader
}
