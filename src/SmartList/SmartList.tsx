import React from 'react'
import { Row, Col } from '../Grid'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { IRowElement, IHeaderItem, ISelectedRows } from '../types'
import { ThinSpinner } from '../Icons/ThinSpinner'
import { LOADING_GREY } from '../style/colors'
import './index.scss'

export interface IProps {
  data: IRowElement[]
  searchHint?: JSX.Element
  cols: IHeaderItem[]
  selectedRows?: ISelectedRows
  headerClass?: string
  onRowSelect?: (selected: ISelectedRows) => void
  activeRow?: string
  defaultSort?: 'asc' | 'desc'
  onActivate?: (id: string) => void
  textIfEmpty?: string
  header?: boolean
  loading?: boolean
  minRowsToShow?: number
}

const SmartList: React.FC<IProps> = ({ 
  data,
  defaultSort,
  cols,
  selectedRows,
  onRowSelect,
  activeRow,
  searchHint,
  onActivate,
  headerClass,
  textIfEmpty,
  loading,
  minRowsToShow,
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

    if (onActivate) {
      onActivate(row.id.toString())
    }
  }

  const headerContent = (
    <Header
      selectAllCol={!!selectedRows}
      onSelectAll={handleSelectAll}
      defaultSort={defaultSort}
      className={headerClass}
      cols={cols}
    />
  )

  const listContent = data.reduce<JSX.Element[]>((acc, row) => {
    acc = acc.concat(
      <ListItem
        onClick={(e) => handleClick(row, e)}
        key={row.id}
        rowId={row.id}
        cols={cols}
        columns={row.columns}
        disabled={row.disabled}
        className={row.className}
        isActive={row.id.toString() === activeRow}
        selectable={!!selectedRows}
        selected={selectedRows && selectedRows[row.id]}
        onSelect={handleSelect}
      />
    )

    return acc
  }, [])

  if (searchHint) {
    listContent.push(searchHint)
  }

  if (minRowsToShow && listContent.length < minRowsToShow) {
    const filler = minRowsToShow - listContent.length
    for (let i = 0; i < filler; i++) {
      listContent.push(
        <Row className='list-row co-empty-list-row' key={`empty-${i}`} />
      )
    }
  }

  const displayContent = (): JSX.Element | null => {
    if (loading) {
      return (
        <div data-testid='smart-list-loading' className='justify-content-center'>
          <Col className='list-placeholder justify-content-center d-flex align-items-center'>
            <ThinSpinner
              strokeWidth={12}
              r={30}
              stroke={LOADING_GREY}
              width='60px'
            />
          </Col>
        </div>
      )
    }

    if (data.length) {
      return <div>{listContent}</div>
    }

    if (textIfEmpty) {
      if (minRowsToShow) {
        const emptyRows: JSX.Element[] = searchHint ? [searchHint] : []
        for (let i = 0; i < minRowsToShow - 1 - (searchHint ? 1 : 0); i++) {
          emptyRows.push(
            <Row className='list-row co-empty-list-row' key={`empty-${i}`} />
          )
        }

        return (
          <div>
            <Row className='list-row align-items-center'>
              <Col>
                {textIfEmpty}
              </Col>
            </Row>
            {emptyRows}
          </div>
        )
      }

      return (
        <div>
          <Row className='list-row align-items-center'>
            <Col>
              {textIfEmpty}
            </Col>
          </Row>
        </div>
      )
    }

    return null
  }

  return (
    <div className='co-smart-list'>
      {header && headerContent}
      {displayContent()}
    </div>
  )
}

export {
  SmartList,
}
