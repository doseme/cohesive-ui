import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen } from '@testing-library/react'

import { PaginationPanel } from './'

interface IProps {
  startPage: number
  totalPages: number
}

const PaginationTestWrapper: React.FC<IProps> = ({startPage, totalPages}) => {
  const [currentPage, updateCurrentPage] = useState(startPage)
  return (
    <PaginationPanel
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={updateCurrentPage}
    />
  )
}

describe('PaginationPanel', () => {
  it('navigates to the first page', async () => {
    render(
      <PaginationTestWrapper
        startPage={20}
        totalPages={20}
      />
    )
    expect(screen.queryByTestId('page-button-1')).toBeTruthy()
    expect(screen.queryByTestId('page-button-20')).toBeTruthy()
  })

  it('displays page 5 and navigates to page 6 using page number button', async () => {
    render(
      <PaginationTestWrapper
        startPage={5}
        totalPages={20}
      />
    )
    expect(screen.queryByTestId('page-button-1')).toBeTruthy()
    expect(screen.queryByTestId('page-button-20')).toBeTruthy()
    expect(screen.queryByTestId('page-button-4')).toBeTruthy()
    expect(screen.queryByTestId('page-button-5')).toBeTruthy()
    expect(screen.queryByTestId('page-button-6')).toBeTruthy()

    fireEvent.click(screen.getByTestId('page-button-6'))

    expect(screen.queryByTestId('page-button-4')).toBeFalsy()
    expect(screen.queryByTestId('page-button-7')).toBeTruthy()
  })

  it('navigates from page 1 to 4 and back using the next and prev buttons', async () => {
    render(
      <PaginationTestWrapper
        startPage={1}
        totalPages={20}
      />
    )
    expect(screen.queryByTestId('page-button-2')).toBeTruthy()
    expect(screen.queryByTestId('page-button-4')).toBeFalsy()

    fireEvent.click(screen.getByTestId('nextButton'))
    fireEvent.click(screen.getByTestId('nextButton'))
    fireEvent.click(screen.getByTestId('nextButton'))

    expect(screen.queryByTestId('page-button-4')).toBeTruthy()
    expect(screen.queryByTestId('page-button-2')).toBeFalsy()

    fireEvent.click(screen.getByTestId('prevButton'))
    fireEvent.click(screen.getByTestId('prevButton'))
    fireEvent.click(screen.getByTestId('prevButton'))

    expect(screen.queryByTestId('page-button-2')).toBeTruthy()
    expect(screen.queryByTestId('page-button-4')).toBeFalsy()
  })
})
