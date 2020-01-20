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
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation()
        console.log('Clicked on action 1')
      }}
    >
      Action 1
    </Button>

    <Button
      variant='warning'
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation()
        console.log('Clicked on action 2')
      }}
    >
      Action 2
    </Button>
  </div>
)

const content: IRowElement[] = [
  {
    id: 1,
    onClick: () => console.log('Clicked on 1'),
    columns: [
      {
        name: 'id',
        element: <div>1</div>,
        text: '1',
      },
      {
        name: 'email',
        element: <div>aa@bb.com</div>,
        text: 'aa@bb.com',
      },
      {
        name: 'actions',
        element: actions
      }
    ]
  },
  {
    id: 2,
    onClick: () => console.log('Clicked on 2'),
    columns: [
      {
        name: 'id',
        element: <div>2</div>,
        text: '2',
      },
      {
        name: 'email',
        element: <div>cc@dd.com</div>,
        text: 'cc@dd.com',
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

stories.add(
  'JSX',
  () =>
  <div className='m-5'>
    <SmartList
      cols={cols}
      data={content}
    />

    <br />
    <h3>With a search input</h3>
    <br />

    <SmartList
      cols={cols}
      data={content}
      search={true}
    />
  </div>
)
