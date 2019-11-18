import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PaginationPanel } from './components/PaginationPanel'
import { Header } from './components/Header'

interface IItem {
  [id: string]: any
}

interface IShapeItem {
  [columnName: string]: {
    attr: string
    size: number
  }
}

interface IProps {
  data: IItem
  shape: IShapeItem
  listItem?: any
}

const SmartList: React.FC<IProps> = ({ data, shape, listItem }) => {
  const [currentPageIds, setCurrentPageIds] = useState<string[]>([])

  const formatListItem = (id: string): JSX.Element => {
    const itemData = data[id]

    if (listItem) {
      const ListItem = listItem

      return (
        <div key={`list-item-${id}`}>
          <ListItem
            {...itemData}
          />
        </div>
      )
    }

    return (
      <Row key={`row-${id}`}>
        {Object.keys(shape).map((columnName: string) => {
          const item = shape[columnName]

          return (
            <Col key={`column-${item.attr}`} sm={item.size}>
              {itemData[item.attr]}
            </Col>
          )
        })}
      </Row>
    )
  }

  const getListItems = (): JSX.Element[] | string => {
    if (currentPageIds.length) {
      return currentPageIds.map(formatListItem)
    }

    return 'No data to display'
  }

  const getHeader = (): JSX.Element | null => {
    if (!listItem) {
      return (
        <Header
          shape={shape}
        />
      )
    }

    return null
  }

  return (
    <PaginationPanel
      handleUpdate={setCurrentPageIds}
      itemIds={Object.keys(data)}
    >
      {getHeader()}

      <div>
        {getListItems()}
      </div>
    </PaginationPanel>
  )


}

export {
  SmartList,
}
