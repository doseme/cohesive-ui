import React from 'react'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'

import './index.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface IProps {
  data: IRowElement[]
  cols: IHeaderItem[]
  textIfEmpty?: string
  header?: boolean
}

export interface IHeaderItem {
  name: string
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
}

const SmartList: React.FC<IProps> = ({ data, cols, textIfEmpty, header = true }) => {
  const headerContent = (
    <Header
      cols={cols}
    />
  )

  const listContent = data.reduce<JSX.Element[]>((acc, row) => {
    acc = acc.concat(
      <ListItem
        onClick={row.onClick}
        key={row.id}
        columns={row.columns}
        className={row.className}
      />
    )

    return acc
  }, [])

  return (
    <>
      {header && headerContent}
      <div>
        {data.length
          ? listContent
          : textIfEmpty
            ? <Row className='list-row align-items-center'>
                <Col>
                  {textIfEmpty} 
                </Col>
              </Row>
            : null}
      </div>
    </>
  )
}

export {
  SmartList,
}
