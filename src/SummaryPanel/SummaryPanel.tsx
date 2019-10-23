import React from 'react'
import Card from 'react-bootstrap/Card'

import { IProps } from './types'

import './index.scss'

class SummaryPanel extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    const {
      panelTitle,
      stat,
      borderColour
    } = this.props

    return (
      <Card
        className='summary-panel'
        style={{
          borderLeft: `6px solid ${borderColour}`
        }}
      >
        <Card.Body
          className='summary-panel-body'
        >
          <Card.Title>
            {panelTitle}<br />
          </Card.Title>
          <h1 className='d-inline'>{stat}</h1>

          <div className='percentage-change'>
          </div>
        </Card.Body>
      </Card>
    )
  }
}

export {
  SummaryPanel
}
