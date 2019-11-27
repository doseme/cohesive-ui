import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { IProps } from './types'

import './index.scss'

const Header: React.FC<IProps> = ({ cols }) => {
  const noop = () => {}

  return (
    <Row
      id='smart-list-header'
      className='pt-2 pb-2 d-flex align-items-center'
    >
      {cols.map(x => 
        <Col 
          onClick={() => x.handleSort ? x.handleSort(x.name) : noop}
          key={`header-column-${x.name}`}
        >
          {x.name}
        </Col>
      )}
    </Row>
  )
}

export {
  Header
}
