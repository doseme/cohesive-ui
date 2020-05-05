import React from 'react'
import { Row, Col } from '../../../Grid'

import { IColumnElement } from '../../../types'
import '../../index.scss'

interface IProps {
  columns: IColumnElement[]
  rowId: number | string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
  className?: string
  selectable?: boolean // backwards compatibilty < 0.9.0
  selected?: boolean
  onSelect?: (id: string | number, newState: boolean) => void
  disabled?: boolean
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const {
    columns,
    onClick,
    selectable,
    selected,
    onSelect,
    disabled,
    rowId
  } = props
  
  const handleSelected = (): void => {
    onSelect && onSelect(rowId, !selected)
  }

  let className = `list-row align-items-center ${props.className || ''}`

  if (selected) {
    className += 'selected '
  }

  if (onClick || selectable) {
    className += 'hover-cursor'
  }

  return (
    <Row
      className={className}
      onClick={onClick}
      id={`row-id-${rowId}`}
      data-testid={`row-id-${rowId}`}
    >
      {
        selectable && <Col
          key={`list-select-${rowId}`}
          data-testid={`check-col-${rowId}`}
        >
          <input
            type='checkbox'
            id={`list-check-${rowId}`}
            disabled={disabled}
            checked={selected || false}
            onChange={handleSelected}
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
