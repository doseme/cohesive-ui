import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './index.scss'

interface IColumnElement {
  name: string
  element: JSX.Element
}

interface IProps {
  columns: IColumnElement[]
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const {
    columns
  } = props

  return (
    <Row
      className='list-row align-items-center'>
      {
        columns.map(x =>
          <Col key={x.name}>{x.element}</Col>
        )
      }
    </Row>
  )
}

export {
  ListItem
}
