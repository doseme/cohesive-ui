import React from 'react'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'

import './index.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface IProps {
  data: IRowElement[]
  cols: IHeaderItem[]
  selectableItems?: boolean
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

const SmartList: React.FC<IProps> = ({ data, cols, selectableItems, textIfEmpty, loading, header = true }) => {
  const headerContent = (
    <Header
      selectOffset={selectableItems}
      cols={cols}
    />
  )

  const listContent = data.reduce<JSX.Element[]>((acc, row) => {
    acc = acc.concat(
      <ListItem
        onClick={row.onClick}
        key={row.id}
        rowId={row.id}
        columns={row.columns}
        disabled={row.disabled}
        className={row.className}
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
