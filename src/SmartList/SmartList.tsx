import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Header } from './components/Header'
import { IProps, IJSXHashmap, IListHashmap, IColumnName } from './types'

const SmartList: React.FC<IProps> = ({ data, customHeader, columnDisplay }) => {

  const getHeader = (): JSX.Element | null => {
    const objectKeys = Object.keys(data)
    if (data && objectKeys.length  && !('$$typeof' in data[objectKeys[0]])) {
      return (
        <Header
          cols={columnDisplay ? columnDisplay.map(x => x.displayName) : Object.keys(data[objectKeys[0]])}
        />
      )
    }

    if (customHeader) { return (customHeader) }

    return null
  }

  const getListContent = (): JSX.Element[] | string => {
    const objectKeys = data && Object.keys(data)

    if (!objectKeys || !objectKeys.length) {
      return 'No data to display'
    }

    // If data is a JSX hashmap, return as is
    if (data && objectKeys.length  && '$$typeof' in data[objectKeys[0]]) {
      const jsxHashmap: IJSXHashmap = data as IJSXHashmap
      return objectKeys.map(id => jsxHashmap[id])
    }

    // Otherwise, we can infer it is of type IListHashmap.
    const listHashmap = data as IListHashmap
    const validColumns = columnDisplay && columnDisplay.map(x => x.keyName)
    return objectKeys.map(rowKey => {
      return (
        <Row key={rowKey}>
          {Object.keys(listHashmap[rowKey]).reduce((acc: JSX.Element[], curr: string): JSX.Element[] => {
            if (validColumns && !validColumns.includes(curr)) {
              return acc
            }
            
            return acc.concat([(
              <Col key={`${rowKey}-${curr}`}>
                {listHashmap[rowKey][curr] && listHashmap[rowKey][curr].toString()}
              </Col>
            )])
          }, [])}
        </Row>
      )
    })
  }

  return (
    <div>
      {getHeader()}
      <div>
        {getListContent()}
      </div>
    </div>
  )
}

export {
  SmartList,
}
