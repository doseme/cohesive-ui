import noop from 'lodash/noop'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen, getByText } from '@testing-library/react'

import { SmartList, IHeaderItem } from './'
import { IRowElement } from './SmartList'

const cols: IHeaderItem[] = [
  {
    name: 'ID',
    handleSort: noop
  },
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
        name: 'id',
        element: <div>One</div>
      }
    ]
  },
  {
    id: 2, 
    onClick: noop, 
    columns: [
      {
        name: 'id',
        element: <div>Two</div>
      }
    ]
  }
]

describe('Dropdown', () => {
  it('selects a value', () => {
    render(
      <SmartList
        cols={cols}
        data={content}
        search={true}
      />
    )
    expect(screen.queryByText(/One/)).toBeTruthy()
    expect(screen.queryByText(/Two/)).toBeTruthy()

    fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'One' }} )

    expect(screen.queryByText(/One/)).toBeTruthy()
    expect(screen.queryByText(/Two/)).toBeFalsy()
  })
})