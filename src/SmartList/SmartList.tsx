import React from 'react'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'

import './index.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface ISelectedRows {
  [id: string]: boolean
}

export interface IProps {
  data: IRowElement[]
  cols: IHeaderItem[]
  selectedRows?: ISelectedRows
  updateSelected?: (selected: ISelectedRows) => void
  textIfEmpty?: string
  header?: boolean
  loading?: boolean
}

// If displayName is falsy, name will be used for the column title
// EXCEPT in the case of an empty string, which will show a blank column title.
// Implemented this way for backward compatibility with pre 0.9.0
export interface IHeaderItem {
  name: string
  displayName?: string
  className?: string
  handleSort?: (column: string) => void
}

export interface IColumnElement {
  name: string
  element?: JSX.Element
  text?: string
}

export interface IRowElement {
  id: number | string
  columns: IColumnElement[]
  onClick?: (event: React.MouseEvent) => any
  className?: string
  disabled?: boolean
}

const SmartList: React.FC<IProps> = ({ 
  data,
  cols,
  selectedRows,
  updateSelected,
  textIfEmpty,
  loading,
  header = true 
}) => {

  const handleSelectAll = (all: boolean): void => {
    if (updateSelected) {
      const newState: ISelectedRows = data.reduce<ISelectedRows>((acc, row) => {
        acc[row.id] = all
        return acc
      }, {})

      console.log(newState)

      updateSelected(newState)
    }
  }

  const handleSelect = (id: string | number, selected: boolean): void => {
    if (updateSelected && selectedRows) {
      const newState: ISelectedRows = data.reduce<ISelectedRows>((acc, row) => {
        if (id === row.id) {
          acc[row.id] = selected
          return acc
        }

        acc[row.id] = selectedRows[row.id]
        return acc
      }, {})
      
      console.log(newState)

      updateSelected(newState)
    }
  }

  const handleClick = (row: IRowElement, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (row.onClick) {
      row.onClick(event)
    }

    if (selectedRows) {
      handleSelect(row.id, !selectedRows[row.id])
    }
  }


  const headerContent = (
    <Header
      selectAllCol={!!selectedRows}
      onSelectAll={handleSelectAll}
      cols={cols}
    />
  )

  const listContent = data.reduce<JSX.Element[]>((acc, row) => {
    acc = acc.concat(
      <ListItem
        onClick={(e) => handleClick(row, e)}
        key={row.id}
        rowId={row.id}
        columns={row.columns}
        disabled={row.disabled}
        className={row.className}
        selectable={!!selectedRows}
        selected={selectedRows && selectedRows[row.id]}
        onSelect={handleSelect}
      />
    )

    return acc
  }, [])

  const displayContent = (): JSX.Element | null => {
    if (loading) {
      return <div>
        <Row>
          <Col className='list-placeholder'></Col>
        </Row>
      </div>
    }

    if (data.length) {
      return <div>{listContent}</div>
    }

    if (textIfEmpty) {
      return <div>
        <Row className='list-row align-items-center'>
          <Col>
            {textIfEmpty} 
          </Col>
        </Row>
      </div>
    }

    return null
  }

  return (
    <>
      {header && headerContent}
      {displayContent()}
    </>
  )
}

export {
  SmartList,
}
