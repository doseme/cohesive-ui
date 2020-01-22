import noop from 'lodash/noop'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, screen, waitForElementToBeRemoved } from '@testing-library/react'

import { PaginationPanel } from './'

describe('PaginationPanel', () => {
  it('selects a value', async () => {
    render(
      <PaginationPanel
        currentPage={1}
        totalPages={20}
        onPageChange={noop}
      />
    )
    expect(screen.getByTestId('page-button-1')).toBeTruthy()
    expect(screen.getByTestId('page-button-2')).toBeTruthy()

    fireEvent.click(screen.getByTestId('lastButton'))

    await waitForElementToBeRemoved(() => screen.getByTestId('page-button-2'))
    expect(screen.getByTestId('page-button-20')).toBeTruthy()
  })
})