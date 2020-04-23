import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { IProps } from './types'
import { IHeaderItem } from '../../SmartList'

import './index.scss'

const Header: React.FC<IProps> = ({ cols, selectOffset }) => {
  const noop = () => {}

  // If IHeaderItem.displayName is falsy, name will be used for the column title
  // EXCEPT in the case of an empty string, which will show a blank column.
  // Implemented this way for backward compatibility with pre 0.9.0
  const nameDisplay = (item: IHeaderItem): string => {
    if (typeof item.displayName === 'undefined') {
      return item.name
    }

    if (item.displayName || item.displayName === '') {
      return item.displayName
    }

    return item.name
  }

  return (
    <Row
      id='smart-list-header'
      className='pt-2 pb-2 d-flex align-items-center'
    >
      {selectOffset && <Col
        key='select-offset-col'
      ></Col>}
      {cols.map(x => 
        <Col 
          onClick={() => x.handleSort ? x.handleSort(x.name) : noop}
          key={`header-column-${x.name}`}
        >
          {nameDisplay(x)}
        </Col>
      )}
    </Row>
  )
}

export {
  Header
}
