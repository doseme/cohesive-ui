import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { IColumnElement } from '../../SmartList'
import '../../index.scss'

interface IProps {
  columns: IColumnElement[]
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
  className?: string
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const {
    columns,
    onClick,
  } = props

  let className = `list-row align-items-center ${props.className || ''}`

  if (onClick) {
    className += 'hover-cursor'
  }

  return (
    <Row
      className={className}
      onClick={onClick}
    >
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
