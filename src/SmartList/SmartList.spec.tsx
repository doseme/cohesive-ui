import noop from 'lodash/noop'
import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'

import { SmartList, IHeaderItem, IRowElement } from './'
import { IProps } from './SmartList'

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

const SmartListSortWrapper: React.FC<IProps> = ({data, cols}) => {
  const [sortColIndex, setSortColIndex] = useState(0)
  const [sortColAscending, setSortColAscending] = useState(true)

  const handleSort = (colIndex: number, ascending: boolean): void => {
    setSortColIndex(colIndex)
    setSortColAscending(ascending)
  }

  const sortedContent = (content: IRowElement[]): IRowElement[] => {
    const sorted = content.concat().sort((a, b) => {
      const one = a.columns[sortColIndex].text || ''
      const two = b.columns[sortColIndex].text || ''

      if (sortColAscending) {
        return (one > two ? 1 : -1)
      }

      return (one < two ? 1 : -1)
    })
    

    return sorted
  }

  return (
    <SmartList
      cols={cols}
      data={sortedContent(data)}
      onSort={handleSort}
    />
  )
}

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

describe('SmartList', () => {
  it('sorts content correctly', async () => {

    render(
      <SmartListSortWrapper
        data={content}
        cols={cols}
      />
    )

    const preOrder = screen.getAllByTestId(/row-id-.*/)

    expect(preOrder.length).toBe(2)

    expect(preOrder[0].id).toBe('row-id-1')
    expect(preOrder[1].id).toBe('row-id-2')

    fireEvent.click(screen.getByTestId('header-column-Name'))
    await new Promise(r => setTimeout(r, 2000));

    const postOrder = screen.getAllByTestId(/row-id-.*/)

    expect(postOrder.length).toBe(2)

    expect(postOrder[0].id).toBe('row-id-2')
    expect(postOrder[1].id).toBe('row-id-1')
  })
})