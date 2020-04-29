import React from 'react'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { IPanelHeaderProps } from '../../Panel'

import './index.scss'

const PanelHeader: React.FC<IPanelHeaderProps> = ({ title, info }) => {
  const getInfo = (): JSX.Element | null => {
    if (info) {
      return (
        <span className='info-icon'>
          <OverlayTrigger
            placement='top'
            overlay={
              <Tooltip id='tooltip-tdm'>
                {info}
              </Tooltip>
            }
          >
            <FontAwesomeIcon
              className='ml-1'
              icon={faQuestionCircle}
            />
          </OverlayTrigger>
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
