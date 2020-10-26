import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import { TooltipMenu, ITooltipMenuData } from './TooltipMenu'

describe('TooltipMenu', () => {
  it('renders items and handles click', () => {
    const item: ITooltipMenuData = {
      id: 1,
      value: 'Element',
      element: <div data-testid='my-element'>This is the element</div>
    }
    const onSelect = jest.fn()
      
    render(
      <TooltipMenu 
        data={[item]} 
        onSelect={onSelect} 
        onClickaway={() => {}}
        open={true}
      />
    )

    fireEvent.click(screen.getByText(/This is the element/))

    expect(onSelect).toHaveBeenCalledWith(item)
  })

  it('renders a search input and calls onSearch prop when changed', () => {
    const onSearch = jest.fn()

    render(
      <TooltipMenu 
        data={[]} 
        onClickaway={() => {}}
        open={true}
        search={true}
        placeholder='Search...'
        emptySearchText='No data...'
        onSearch={onSearch}
      />
    )

    const $search = screen.getByPlaceholderText('Search...')
    fireEvent.change($search, { target: { value: 'Some search term' } })

    expect(onSearch).toHaveBeenCalledWith('Some search term')
    expect(screen.getByTestId('co-tooltip-menu-no-data')).toBeInTheDocument()
  })
})
