import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { IRowElement, IHeaderItem, ISelectedRows } from '../types'
import './index.scss'

export interface IProps {
  data: IRowElement[]
  cols: IHeaderItem[]
  selectedRows?: ISelectedRows
  onRowSelect?: (selected: ISelectedRows) => void
  onSort?: (colIndex: number, ascending: boolean) => void
  textIfEmpty?: string
  header?: boolean
  loading?: boolean
}

const SmartList: React.FC<IProps> = ({ 
  data,
  cols,
  selectedRows,
  onRowSelect,
  onSort,
  textIfEmpty,
  loading,
  header = true 
}) => {

  const handleSelectAll = (allSelected: boolean): void => {
    if (onRowSelect) {
      const newState: ISelectedRows = data.reduce<ISelectedRows>((acc, row) => {
        acc[row.id] = allSelected
        return acc
      }, {})

      onRowSelect(newState)
    }
  }

  const handleSelect = (id: string | number, selected: boolean): void => {
    if (onRowSelect && selectedRows) {
      const newState: ISelectedRows = data.reduce<ISelectedRows>((acc, row) => {
        if (id === row.id) {
          acc[row.id] = selected
          return acc
        }

        acc[row.id] = selectedRows[row.id]
        return acc
      }, {})
      
      onRowSelect(newState)
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
      onSort={onSort}
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
