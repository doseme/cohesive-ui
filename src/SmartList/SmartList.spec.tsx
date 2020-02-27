import noop from 'lodash/noop'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'

import { SmartList, IHeaderItem, IRowElement } from './'

const cols: IHeaderItem[] = [
  {
    name: 'Name',
    handleSort: noop
  },
]

const content: IRowElement[] = [
  {
    id: 1, 
    onClick: noop, 
    columns: [
      {
        name: 'name',
        element: <div>One</div>,
        text: 'One',
      }
    ]
  },
  {
    id: 2, 
    onClick: noop, 
    columns: [
      {
        name: 'name',
        element: <div>Two</div>,
        text: 'Two',
      }
    ]
  }
]

describe('SmartList', () => {
  it('displays content', () => {
    render(
      <SmartList
        cols={cols}
        data={content}
      />
    )
    expect(screen.queryByText(/One/)).toBeTruthy()
    expect(screen.queryByText(/Two/)).toBeTruthy()
  })
})