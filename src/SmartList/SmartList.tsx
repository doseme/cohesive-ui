import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Header } from './components/Header'
import { IProps, IJSXHashmap, IListHashmap } from './types'

const SmartList: React.FC<IProps> = ({ data, customHeader, columnDisplay }) => {

  const getHeader = (): JSX.Element | null => {
    const objectKeys = Object.keys(data)
    // If list is using the data table display, provide generic header based on columnDisplay prop if exists, else data struct key names.
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

    // If data is a hash containing JSX elements, return as is
    if (data && objectKeys.length  && '$$typeof' in data[objectKeys[0]]) {
      const jsxHashmap = data as IJSXHashmap
      return objectKeys.map(id => jsxHashmap[id])
    }

    // Otherwise, we can infer it is a data table.
    const listHashmap = data as IListHashmap
    const validColumns = columnDisplay && columnDisplay.map(x => x.keyName)
    return objectKeys.map(rowKey => {
      return (
        <Row key={rowKey}>
          {Object.keys(listHashmap[rowKey]).reduce((allCols: JSX.Element[], thisCol: string): JSX.Element[] => {
            if (validColumns && !validColumns.includes(thisCol)) {
              return allCols
            }
            
            return allCols.concat([(
              <Col key={`${rowKey}-${thisCol}`}>
                {listHashmap[rowKey][thisCol] && listHashmap[rowKey][thisCol].toString()}
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
