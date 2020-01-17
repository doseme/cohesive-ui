import React, { useState } from 'react'

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

  const listContent = data.map(row =>
    <ListItem
      onClick={row.onClick}
      key={row.id}
      columns={row.columns}
    />
  )

  const searchInput = search && (
    <div className='d-flex justify-content-end'>
      <SearchInput
        onChange={setSearchText}
        value={searchText}
      />
    </div>
  )

  return (
    <div className=''>
      {searchInput}
      {header}
      <div>
        {listContent} 
      </div>
    </div>
  )
}

export {
  SmartList,
}
