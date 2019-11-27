import React from 'react'
import { storiesOf } from '@storybook/react'

import { SmartList } from './SmartList'
import { IRowElement, IHeaderItem } from './SmartList'
import { Button } from '../Button'

const stories = storiesOf('Components.SmartList', module)

const actions = (
  <div className='d-flex'>
    <Button
      variant='primary'
      onClick={() => {/***/ }}
    >
      Action 1
    </Button>

    <Button
      variant='warning'
      onClick={() => {/***/ }}
    >
      Action 2
    </Button>
  </div>
)

const content: IRowElement[] = [
  {
    id: 1,
    columns: [
      {
        name: 'id',
        element: <div>1</div>
      },
      {
        name: 'email',
        element: <div>aa@bb.com</div>
      },
      {
        name: 'actions',
        element: actions
      }
    ]
  },
  {
    id: 2,
    columns: [
      {
        name: 'id',
        element: <div>2</div>,
      },
      {
        name: 'email',
        element: <div>cc@dd.com</div>
      },
      {
        name: 'actions',
        element: actions,
      }
    ]
  }
]

const cols: IHeaderItem[] = [
  {
    name: 'ID',
    handleSort: () => {/***/}
  },
  {
    name: 'Email',
    handleSort: () => {/***/}
  },
  {
    name: 'Actions',
  }
]

const dataContent = 

stories.add(
  'JSX',
  () =>
    <SmartList
      cols={cols}
      data={content}
    />
)
