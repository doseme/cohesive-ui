import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { PaginationPanel } from './PaginationPanel'

const MobileWithPages = (payload: { totalPages: number, currentPage?: number }) => {
  const [currentPage, updateCurrentPage] = useState(payload.currentPage || 1)

  return (
    <React.Fragment>
      <h4>Pagination panel mobile version (total {payload.totalPages} pages)</h4>
      <span>{`on page ${currentPage} of ${payload.totalPages}`}</span>
      <PaginationPanel
        isMobile={true}
        currentPage={currentPage}
        totalPages={payload.totalPages}
        onPageChange={updateCurrentPage}
      />
    </React.Fragment>
  )
}

storiesOf('Components.PaginationPanel', module)
  .add('Generic', () => {
    const totalPages = 20
    const [currentPage, updateCurrentPage] = useState(1)

    return (
      <div>
        <h1>Desktop Version</h1>
        <h4>Pagination panel with 20 pages</h4>
        <span>{`on page ${currentPage} of ${totalPages}`}</span>
        <PaginationPanel
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={updateCurrentPage}
        />

        <h4>Pagination panel mobile version (total 20 pages)</h4>
        <span>{`on page ${currentPage} of ${totalPages}`}</span>
        <PaginationPanel
          isMobile={true}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={updateCurrentPage}
        />

        <hr />
        <h1>Mobile Version</h1>

        {MobileWithPages({ totalPages: 2 })}
        {MobileWithPages({ totalPages: 5 })}
        {MobileWithPages({ totalPages: 20, currentPage: 10 })}
        {MobileWithPages({ totalPages: 20, currentPage: 2 })}
        {MobileWithPages({ totalPages: 20, currentPage: 19 })}
      </div>
    )
  })
