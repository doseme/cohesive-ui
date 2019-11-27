import React from 'react'

import { Header } from './components/Header'
import { ListItem } from './components/ListItem'

export interface IProps {
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
}

const SmartList: React.FC<IProps> = ({ data, cols }) => {

  const header = (
    <Header
      cols={cols}
    />
  )

  const listContent = data.map(row =>
    <ListItem
      key={row.id}
      columns={row.columns}
    />
  )

  return (
    <div>
      {header}
      <div>
        {listContent} 
      </div>
    </div>
  )
}

export {
  SmartList,
  IRowElement,
  IColumnElement,
  IHeaderItem,
}
