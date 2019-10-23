import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

import { IProps } from '../../types'

import './index.scss'

class PanelHeader extends React.PureComponent<IProps> {
  private get info(): JSX.Element | null {
    if (this.props.info) {
      return (
        <span className='info-icon'>
          <OverlayTrigger
            placement='top'
            overlay={
              <Tooltip id='tooltip-tdm'>
                {this.props.info}
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

  public render(): JSX.Element | null {
    if (!this.props.title) {
      return null
    }

    return (
      <div className='panel-header'>
        {this.props.title}
        {this.info}
      </div>
    )
  }
}

export {
  PanelHeader
}
