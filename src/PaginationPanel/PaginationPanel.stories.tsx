import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { PaginationPanel } from './PaginationPanel'

storiesOf('Components.PaginationPanel', module)
  .add('Generic', () => {
    const totalPages = 20
    const [currentPage, updateCurrentPage] = useState(1)

    return (
      <div>
        <h4>Pagination panel with 20 pages</h4>
        <span>{`on page ${currentPage} of ${totalPages}`}</span>
        <PaginationPanel
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={updateCurrentPage}
        />
      </div>
    )
  })
