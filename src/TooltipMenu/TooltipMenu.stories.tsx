import React from 'react'
import { storiesOf } from '@storybook/react'

import { TooltipMenu } from './TooltipMenu'


storiesOf('Components.TooltipMenu', module)
  .add('Various', () => {
    return (
      <>
        <TooltipMenu 
          style={{ width: '250px' }}
          data={[
            { id: 1, value: 'Hospital 1' },
            { id: 2, value: 'Hospital 2' },
            { id: 3, value: 'Hospital 3' },
            { id: 4, value: 'Hospital 4' },
            { id: 5, value: 'Hospital 5' },
            { id: 6, value: 'Hospital 6' },
            { id: 7, value: 'Hospital 7' },
            { id: 8, value: 'Hospital 8' },
          ]}
        />
      </>
    )
  })
