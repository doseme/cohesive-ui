import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { IProps } from './types'

import './index.scss'

const Header: React.FC<IProps> = ({ shape }) => {
  return (
    <Row
      id='smart-list-header'
      className='pt-2 pb-2 d-flex align-items-center'
    >
      {Object.keys(shape).map((columnName: string) =>
        <Col key={`header-column-${columnName}`} sm={shape[columnName].size}>
          {columnName}
        </Col>
      )}
    </Row>
  )
}

export {
  Header
}
