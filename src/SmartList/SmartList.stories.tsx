import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'

import { SmartList } from './SmartList'
import { Button } from '../Button'
import { IRowElement, IHeaderItem, ISelectedRows } from '../types'
import { SearchHint } from './components/SearchHint'
import { DOSEME_BLUE, PANELBLUE } from '../style/colors'

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
        element: <div><a href='mailto:aa@bb.com'>aa@bb.com</a></div>,
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
            Long long long Long long long Long long long Long long long Long long long Long long long
            Long long long Long long long Long long long Long long long Long long long Long long long
            Long long long Long long long Long long long Long long long Long long long Long long long
            Long long long Long long long Long long long Long long long Long long long Long long long
            Long long long Long long long Long long long Long long long Long long long Long long long
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

const colsBlankActions: IHeaderItem[] = [
  {
    name: 'ID',
  },
  {
    name: 'Email',
  },
  {
    name: 'Actions',
    displayName: ''
  }
]

stories.add(
  'JSX',
  () => {
    const [selected, setSelected] = useState<ISelectedRows>(
      content.reduce<ISelectedRows>((acc, row) => {
        acc[row.id] = false
        return acc
      }, {})
    )
    const [activeRow, setActiveRow] = useState('')

    const [sortColIndex, setSortColIndex] = useState(0)
    const [sortColAscending, setSortColAscending] = useState(true)

    const handleSort = (colIndex: number, ascending: boolean): void => {
      setSortColIndex(colIndex)
      setSortColAscending(ascending)
    }
    
    const sortedContent = (content: IRowElement[]): IRowElement[] => {
      return content.concat().sort((a, b) => {
        const one = a.columns[sortColIndex].text || ''
        const two = b.columns[sortColIndex].text || ''

        if (sortColAscending) {
          return (one > two ? 1 : -1)
        }

        return (one < two ? 1 : -1)
      })
    }

    const colsSortable: IHeaderItem[] = [
      {
        name: 'ID',
        handleSort,
      },
      {
        name: 'Email',
        handleSort,
      },
      {
        name: 'Actions',
        displayName: ''
      }
    ]

    return (
      <div className='m-5'>
        <h3>Show Search Hint</h3>
        <SmartList
          cols={colsBlankActions}
          data={content}
          searchHint={
            <SearchHint style={{ background: PANELBLUE, color: 'white' }}>
              <div>This is the preview</div>
            </SearchHint>
          }
        />

        <br />
        <br />

        <h3>Minimum of 10 rows</h3>
        <SmartList
          cols={colsBlankActions}
          data={content}
          minRowsToShow={10}
        />

        <br />
        <br />

        <h3>Plain list with items</h3>
        <SmartList
          cols={cols}
          data={content}
        />
        <br />
        <br />

        <h3>Custom empty table message</h3>
        <SmartList
          cols={cols}
          data={[]}
          textIfEmpty='No data in table.'
        />
        <br />
        <br />

        <h3>Custom empty table message with 10 rows always showing</h3>
        <SmartList
          cols={cols}
          data={[]}
          textIfEmpty='No data in table.'
          minRowsToShow={10}
        />
        <br />
        <br />

        <h3>Many Columns</h3>
        <SmartList
          cols={[
            { name: '', width: 1 },
            { name: 'ID', width: 1 },
            { name: 'First Name. Last Name', width: 4 },
            { name: 'Date of Birth', width: 2, className: 'co-col-hide-med' },
            { name: 'Last Modified', width: 3 },
            { name: 'Actions' },
          ]}
          data={[
            {
              id: 1,
              columns: [
                { name: '', element: <input type="checkbox" /> },
                { text: '1234', name: 'ID' },
                { text: 'Very Long Patient Name', name: 'First Name, Last Name' },
                { text: '11/01/2020', name: 'Date of Birth', className: 'co-col-hide-med' },
                { text: 'June 06 2018 09:00', name: 'Last Modified' },
                { element: <button>...</button>, name: 'Actions' },
              ]
            }
          ]}
        />
        <br />
        <br />

        <h3>Loading state</h3>
        <SmartList
          cols={cols}
          data={[]}
          loading
        />
        <br />
        <br />

        <h3>No header</h3>
        <SmartList
          cols={cols}
          data={content}
          header={false}
        />
        <br />
        <br />
        <h3>Combining two lists</h3>
        <SmartList
          cols={cols}
          data={[]}
          textIfEmpty='This is an empty row message, and any data below this is in a separate, headerless smart list!'
        />

        <SmartList
          cols={cols}
          data={content}
          header={false}
        />

        <br />
        <br />

        <h3>Column without title</h3>
        <SmartList
          cols={colsBlankActions}
          data={content}
        />

        <br />
        <br />

        <h3>Selectable list items, click to choose active row, sortable columns, nameless column for Actions</h3>
        <SmartList
          cols={colsSortable}
          data={sortedContent(content)}
          defaultSortColumn='Email'
          defaultSortDirection='asc'
          selectedRows={selected}
          onRowSelect={setSelected}
          activeRow={activeRow}
          onActivate={setActiveRow}
        />

      </div>
    )
  }
)
