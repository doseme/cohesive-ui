import React, { useState } from 'react'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { SearchInput } from './components/SearchInput'

import './index.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export interface IProps {
  search?: boolean
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

const SmartList: React.FC<IProps> = ({ data, cols, search, textIfEmpty, header = true }) => {
  const [searchText, setSearchText] = useState('')

  const headerContent = (
    <Header
      cols={cols}
    />
  )

  const listContent = data.reduce<JSX.Element[]>((acc, row) => {
    if (!searchText || (searchText && row.columns.some(el => el.text && el.text.includes(searchText)))) {
      acc = acc.concat(
        <ListItem
          onClick={row.onClick}
          key={row.id}
          columns={row.columns}
          className={row.className}
        />
      )
    }

    return acc
  }, [])

  const searchInput = search && (
    <div className='d-flex w-100 justify-content-end search-offset'>
      <SearchInput
        onChange={setSearchText}
        value={searchText}
      />
    </div>
  )

  return (
    <>
      <div className='position-relative'>
      {searchInput}</div>
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
