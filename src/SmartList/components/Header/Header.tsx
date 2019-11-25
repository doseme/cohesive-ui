import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { IProps } from './types'

import './index.scss'

const Header: React.FC<IProps> = ({ cols }) => {
  return (
    <Row
      id='smart-list-header'
      className='pt-2 pb-2 d-flex align-items-center'
    >
      {cols.map((columnName: string) =>
        <Col key={`header-column-${columnName}`}>
          {columnName}
        </Col>
      )}
    </Row>
  )
}

export {
  Header
}
