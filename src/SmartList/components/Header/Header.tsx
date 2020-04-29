import React, { useState } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

import { IProps } from './types'
import { IHeaderItem } from '../../SmartList'
import { NAVY } from '../../../style/colors'
import './index.scss'

const Header: React.FC<IProps> = ({ cols, selectAllCol, onSort, onSelectAll }) => {
  const [allChecked, toggleAllChecked] = useState(false)
  const [sortColumn, setSortColumn] = useState<string>(cols[0].name)
  const [sortAscending, setSortAscending] = useState(true)

  // If IHeaderItem.displayName is falsy, name will be used for the column title
  // EXCEPT in the case of an empty string, which will show a blank column.
  // Implemented this way for backward compatibility with pre 0.9.0

  const useDisplayName = (item: IHeaderItem): boolean => {
    if (typeof item.displayName === 'undefined') {
      return false
    }

    if (item.displayName || item.displayName === '') {
      return true
    }

    return false
  }


  const nameDisplay = (item: IHeaderItem): string => {
    if (useDisplayName(item)) {
      return item.displayName!
    }

    return item.name
  }

  const handleSortButtonClicked = (colIndex: number): void => {
    const item = cols[colIndex]

    if (onSort) {
      if (sortColumn === item.name) {
        onSort(colIndex, !sortAscending)
        setSortAscending(!sortAscending)
        return
      }

      onSort(colIndex, true)
      setSortAscending(true)
      setSortColumn(item.name)
    }
  }

  const sortButton = (item: IHeaderItem): JSX.Element => {
    if (item.name === sortColumn) {
      if (sortAscending) {
        return (
          <div className='fa-layers ml-1'>
            <FontAwesomeIcon
              className='fa-stack pb-2'
              color={NAVY}
              icon={faCaretUp}
            />
          </div>
        )
      }

      return (
        <div className='fa-layers ml-1'>
          <FontAwesomeIcon
            className='fa-stack pt-2'
            color={NAVY}
            icon={faCaretDown}
          />
        </div>
      )
    }

    return (
      <div className='fa-layers ml-1'>
        <FontAwesomeIcon
          color={NAVY}
          className='fa-stack pb-2'
          icon={faCaretUp}
        />
        <FontAwesomeIcon
          color={NAVY}
          className='fa-stack pt-2'
          icon={faCaretDown}
        />
      </div>
    )
  }

  const handleAllChecked = (): void => {
    onSelectAll && onSelectAll(!allChecked)
    toggleAllChecked(!allChecked)
  }

  const sortable = (x: IHeaderItem): boolean => {
    return !!onSort && !(useDisplayName(x) && x.displayName === '') && !!x.sortable
  }

  return (
    <Row
      id='smart-list-header'
      className='pt-2 pb-2 d-flex align-items-center'
    >
      {selectAllCol && <Col
        key='select-all-col'
        xs={1}
       >
         <input
           type='checkbox'
           id={`check-select-all`}
           checked={allChecked}
           onClick={handleAllChecked}
         />
      </Col>}
      {cols.map((x, idx) => 
        <Col 
          key={`header-column-${x.name}`}
          onClick={() => sortable(x) && handleSortButtonClicked(idx)}
        >
          {nameDisplay(x)}
          {sortable(x) && sortButton(x)}
        </Col>
      )}
    </Row>
  )
}

export {
  Header
}
