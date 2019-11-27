import React from 'react'

import { Header } from './components/Header'
import { IProps } from './types'
import { ListItem } from './components/ListItem'

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
}
