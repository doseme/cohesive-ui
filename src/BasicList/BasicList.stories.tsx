import React from 'react'
import { storiesOf } from '@storybook/react'

import { BasicList } from './BasicList'
import { IRowElement, IHeaderItem } from '../types'
import { Button } from '../Button'

const stories = storiesOf('Components.BasicList', module)

const actions = (
  <div className='d-flex'>
    <Button
      variant='primary'
      onClick={(e: React.MouseEvent) => {
        e.stopPropagation()
        console.log('Clicked on action 1')
      }}
    >
      ...
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
    columns: [
      {
        name: 'id',
        element: <div>2</div>,
        text: '2',
      },
      {
        name: 'email',
        element: <div>not@clickable.com</div>,
        text: 'cc@dd.com',
      },
      {
        name: 'actions',
        element: actions,
      }
    ]
  },
  {
    id: 3,
    columns: [
      {
        name: 'id',
        element: <div>3</div>,
        text: '3',
      },
      {
        name: 'email',
        element: (
          <div>
            cc@dd.com
          </div>
        ),
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
  },
  {
    name: 'Email',
  },
  {
    name: 'Actions',
  }
]

stories.add(
  'JSX',
  () =>
  <div className='m-5'>
    <h3>Plain list with items</h3>
    <BasicList
      header={true}
      cols={cols}
      data={content}
    />
    <br />
    <br />

    {/* <h3>Custom empty table message</h3>
    <BasicList
      cols={cols}
      data={[]}
      textIfEmpty='No data in table.'
    />
    <br />
    <br />

    <h3>Loading state</h3>
    <BasicList
      cols={cols}
      data={[]}
      loading
    />
    <br />
    <br />

    <h3>No header</h3>
    <BasicList
      cols={cols}
      data={content}
      header={false}
    />
    <br />
    <br />

    <h3>Combining two lists</h3>
    <BasicList
      cols={cols}
      data={[]}
      textIfEmpty='This is an empty row message, and any data below this is in a separate, headerless smart list!'
    />

    <BasicList
      cols={cols}
      data={content}
      header={false}
    /> */}
  </div>
)
