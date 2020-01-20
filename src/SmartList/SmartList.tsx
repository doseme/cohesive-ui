import React, { useState, useEffect } from 'react'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'
import { SearchInput } from './components/SearchInput'

export interface IProps {
  search?: boolean
  data: IRowElement[]
  cols: IHeaderItem[]
}

export interface IHeaderItem {
  name: string
  className?: string
  handleSort?: (column: string) => void
}

export interface IColumnElement {
  name: string
  element: JSX.Element
}

export interface IRowElement {
  id: number | string
  columns: IColumnElement[]
  onClick?: (event: React.MouseEvent) => any
}

const SmartList: React.FC<IProps> = ({ data, cols, search }) => {
  const [searchText, setSearchText] = useState('')

  const header = (
    <Header
      cols={cols}
    />
  )

  const listContent = data.reduce<JSX.Element[]>((acc, row) => {
    // if there is no search text entered, we just render all the items
    if (!searchText) {
      acc = acc.concat(
        <ListItem
          onClick={row.onClick}
          key={row.id}
          columns={row.columns}
        />
      )
      return acc
    }

    // if there is some search text, we stringify the content and see if
    // any of them match the search string
    if (
      row.columns.some(el => {
        const content = el.element.props.children && el.element.props.children
        const contentStr = content.toString()
        return contentStr && !contentStr.includes('[object Object]') && contentStr.includes(searchText)
      })
    ) {
      acc = acc.concat(
        <ListItem
          onClick={row.onClick}
          key={row.id}
          columns={row.columns}
        />
      )
    }

    return acc
  }, [])

  const searchInput = search && (
    <div className='d-flex justify-content-end'>
      <SearchInput
        onChange={setSearchText}
        value={searchText}
      />
    </div>
  )

  return (
    <>
      {searchInput}
      {header}
      <div>
        {listContent} 
      </div>
    </>
  )
}

export {
  SmartList,
}
