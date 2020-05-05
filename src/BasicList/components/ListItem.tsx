import React from 'react'
import { Row, Col } from '../../Grid'

import { IColumnElement, IHeaderItem } from '../../SmartList'
import './list-item.scss';

interface IProps {
  columns: IColumnElement[]
  className?: string
  cols?: IHeaderItem[]
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const {
    columns,
  } = props

  let className = `basic-list-row align-items-center ${props.className || ''}`

  return (
    <Row className={className}>
      {
        columns.map((x, idx) =>
          <Col 
            key={x.name}
            data-test={x.name}
            width={props.cols && props.cols[idx].width}
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
