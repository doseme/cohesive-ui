import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Header } from './components/Header'
import { PaginationPanel } from '..'

interface IListHashmap {
  [key: string]: {
    [col: string]: any
  }
}

interface IJSXHashmap {
  [key: string]: JSX.Element
}

interface IProps {
  header?: JSX.Element
  data: IJSXHashmap | IListHashmap
}

const SmartList: React.FC<IProps> = ({ data, header }) => {
  const [currentPageIds, setCurrentPageIds] = useState<string[]>([])

  const getHeader = (): JSX.Element | null => {
    if (data && data[currentPageIds[0]]  && !('$$typeof' in data[currentPageIds[0]])) {
      return (
        <Header
          cols={Object.keys(data[currentPageIds[0]])}
        />
      )
    }

    if (header) { return (header) }

    return null
  }

  const getListContent = (): JSX.Element[] | string => {
    if (currentPageIds.length) {
      // If data is a JSX hashmap, return as is
      if (data && data[currentPageIds[0]]  && '$$typeof' in data[currentPageIds[0]]) {
        const jsxHashmap: IJSXHashmap = data as IJSXHashmap
        return currentPageIds.map(id => jsxHashmap[id])
      }

      // Otherwise, we can infer it is of type IListHashmap.
      const listHashmap = data as IListHashmap
      return currentPageIds.map(x => {
        return (
          <Row key={x}>
            {Object.keys(listHashmap[x]).map(y => {
              return (
                <Col key={`${x}-${y}`}>
                  {listHashmap[x][y] && listHashmap[x][y].toString()}
                </Col>
              )
            })}
          </Row>
        )
      })
    }

    return 'No data to display'
  }

  return (
    <PaginationPanel
      itemIds={Object.keys(data)}
      handleUpdate={setCurrentPageIds}
    >
      {getHeader()}
      <div>
        {getListContent()}
      </div>
    </PaginationPanel>
  )
}

export {
  SmartList,
}
