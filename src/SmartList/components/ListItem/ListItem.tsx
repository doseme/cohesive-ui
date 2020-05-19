import React from 'react'
import { Row, Col } from '../../../Grid'

import { IColumnElement, IHeaderItem } from '../../../types'
import '../../index.scss'

interface IProps {
  columns: IColumnElement[]
  rowId: number | string
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => any
  className?: string
  isActive?: boolean
  selectable?: boolean
  selected?: boolean
  onSelect?: (id: string | number, newState: boolean) => void
  disabled?: boolean
  cols?: IHeaderItem[]
}

const ListItem: React.FC<IProps> = (props: IProps) => {
  const {
    columns,
    onClick,
    isActive,
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

  if (isActive) {
    className += 'active-row '
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
          width={1}
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
        columns.map((x, idx) =>
          <Col 
            key={x.name}
            data-test={x.name}
            className={x.className || ''}
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
