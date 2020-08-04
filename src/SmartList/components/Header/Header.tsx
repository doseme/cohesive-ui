import React, { useState } from 'react'
import { Row, Col } from '../../../Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import classnames from 'classnames'

import { IProps } from './types'
import { IHeaderItem } from '../../../types'
import { NAVY } from '../../../style/colors'
import './index.scss'

/**
 * `defaultSort` is only used to set the icon. It's only for the UI.
 * It does not actually sort the list - you need to do that yourself
 */
const Header: React.FC<IProps> = ({ cols, selectAllCol, onSelectAll, className, defaultSortDirection, defaultSortColumn }) => {
  const [allChecked, toggleAllChecked] = useState(false)
  const [sortColumn, setSortColumn] = useState<string>(defaultSortColumn || cols[0].name)
  const [sortAscending, setSortAscending] = useState(defaultSortDirection === 'asc')

  // If IHeaderItem.displayName is falsy, name will be used for the column title
  // EXCEPT in the case of an empty string, which will show a blank column.
  // Implemented this way for backward compatibility with pre 0.9.0
  const nameDisplay = (item: IHeaderItem): string => {
    if (!!item.displayName || item.displayName === '') {
      return item.displayName
    }

    return item.name
  }

  const handleSortButtonClicked = (col: IHeaderItem, colIndex: number): void => {
    if (col.handleSort) {
      const item = cols[colIndex]

      if (sortColumn === item.name) {
        col.handleSort(colIndex, !sortAscending)
        setSortAscending(!sortAscending)
        return
      }

      col.handleSort(colIndex, true)
      setSortAscending(true)
      setSortColumn(item.name)
    }
  }

  const sortButton = (item: IHeaderItem, colIndex: number): JSX.Element => {
    const sortAscendingIcon = (
      <div className='fa-layers ml-1'>
        <FontAwesomeIcon
          className='fa-stack pb-2'
          color={NAVY}
          icon={faCaretUp}
        />
      </div>
    )

    const sortDescendingIcon = (
      <div className='fa-layers ml-1'>
        <FontAwesomeIcon
          className='fa-stack pt-2'
          color={NAVY}
          icon={faCaretDown}
        />
      </div>
    )

    if (sortAscending && item.name === sortColumn) {
      return sortAscendingIcon
    }

    if (!sortAscending && item.name === sortColumn) {
      return sortDescendingIcon
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
    return !!x.handleSort && !(x.displayName && x.displayName === '')
  }

  const klass = classnames(className, 'co-smart-list-header', 'pt-2 pb-2 d-flex align-items-center')

  return (
    <Row className={klass}>
      {selectAllCol && <Col
        key='select-all-col'
        width='checkbox-only'
       >
         <input
           type='checkbox'
           id='check-select-all'
           checked={allChecked}
           onChange={() => {}}
           onClick={handleAllChecked}
         />
      </Col>}
      {cols.map((x, idx) => !x.hidden && 
        <Col 
          data-testid={`header-column-${x.name}`}
          width={x.width}
          key={x.name}
          onClick={() => sortable(x) && handleSortButtonClicked(x, idx)}
          className={sortable(x) ? `cursor-pointer ${x.className}` : x.className}
        >
          {nameDisplay(x)}
          {sortable(x) && sortButton(x, idx)}
        </Col>
      )}
    </Row>
  )
}

export {
  Header
}
