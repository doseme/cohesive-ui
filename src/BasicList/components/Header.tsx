import React from 'react'
import { Row, Col } from '../../Grid'

import { IHeaderItem } from '../../types'
import './header.scss'

interface IProps {
  cols: IHeaderItem[]
}

const Header: React.FC<IProps> = ({ cols }) => {
  return (
    <Row
      className='basic-list-header pt-2 pb-2 d-flex align-items-center'
    >
      {cols.map(x => 
        <Col key={x.name}>
          <b>{x.name}</b>
        </Col>
      )}
    </Row>
  )
}

export {
  Header
}
