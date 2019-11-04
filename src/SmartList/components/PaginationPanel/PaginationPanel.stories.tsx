import React from 'react'
import { storiesOf } from '@storybook/react'

import { PaginationPanel } from './PaginationPanel'

storiesOf('Components', module)
  .add('PaginationPanel', () => {
    return (
      <PaginationPanel
        listName='Test'
        perPage={2}
        allItems={[
          '1-1',
          '2-1',
          '3-1',
          '4-1',
          '5-1',
          '6-1',
          '7-1',
          '8-1',
          '9-1',
          '10-1',
          '11-1',
          '12-1',
          '13-1',
          '14-1',
          '15-1',
          '16-1',
          '17-1',
          '18-1',
          '19-1',
          '20-1'
        ]}
        handleUpdate={() => { console.log('updated') }}
        neighboursToShow={1}
        edgesToShow={1}
      />
    )
  })
