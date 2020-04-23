import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { IColumnElement } from '../../SmartList'
import '../../index.scss'

interface IProps {
  columns: IColumnElement[]
  rowId: number | string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
  className?: string
  selectable?: boolean // backwards compatibilty < 0.9.0
  selected?: boolean
  disabled?: boolean
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const {
    columns,
    onClick,
    selectable,
    selected,
    disabled,
    rowId
  } = props

  let className = `list-row align-items-center ${props.className || ''}`

  if (selected) {
    className += 'selected '
  }

  if (onClick) {
    className += 'hover-cursor'
  }

  return (
    <Row
      className={className}
      onClick={onClick}
    >
      {
        selectable && <Col
          key={`list-select-${rowId}`}
          data-test={`check-col-${rowId}`}
        >
          <input
            type='checkbox'
            id={`list-check-${rowId}`}
            disabled={disabled}
            checked={selected || false}
          />
        </Col>
      }
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
