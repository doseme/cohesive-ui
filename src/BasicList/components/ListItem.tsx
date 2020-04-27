import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { IColumnElement } from '../../SmartList'
import './list-item.scss'

interface IProps {
  columns: IColumnElement[]
  className?: string
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const {
    columns,
  } = props

  let className = `list-row align-items-center ${props.className || ''}`

  return (
    <Row className={className}>
      {
        columns.map(x =>
          <Col 
            key={x.name}
            data-test={x.name}
          >
            {x.element || x.text}
          </Col>
        )
      }
    </Row>
  )
}

export {
  ListItem
}
