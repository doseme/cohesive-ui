import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'

import { SmartList, IHeaderItem, IRowElement } from './'

const cols: IHeaderItem[] = [
  {
    name: 'name',
    sortable: true,
    displayName: 'name'
  },
]

const contentFactory = (): IRowElement[] => [
  {
    id: 1, 
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
        data={contentFactory()}
      />
    )
    expect(screen.queryByText(/One/)).toBeTruthy()
    expect(screen.queryByText(/Two/)).toBeTruthy()
  })
})

describe('SmartList', () => {
  it('sorts content correctly', async () => {
    const SmartListWrapper = () => {
      const [content, setContent] = useState(contentFactory())
      const handleSort = (index: number, asc: boolean) => {
        const updated = content.concat().sort((a, b) => {
          const one = a.columns[index].text || ''
          const two = b.columns[index].text || ''

          if (asc) {
            return (one > two ? 1 : -1)
          }

          return (one < two ? 1 : -1)
        })

        setContent(updated)
      }


      return (
        <SmartList
          data={content}
          cols={cols}
          onSort={handleSort}
        />
      )
    } 

    render(<SmartListWrapper />)

    const preOrder = screen.getAllByTestId(/row-id-.*/)

    expect(preOrder.length).toBe(2)

    expect(preOrder[0].id).toBe('row-id-1')
    expect(preOrder[1].id).toBe('row-id-2')

    fireEvent.click(screen.getByTestId('header-column-name'))
    await new Promise(r => setTimeout(r, 2000));

    const postOrder = screen.getAllByTestId(/row-id-.*/)

    expect(postOrder.length).toBe(2)

    expect(postOrder[0].id).toBe('row-id-2')
    expect(postOrder[1].id).toBe('row-id-1')
  })
})