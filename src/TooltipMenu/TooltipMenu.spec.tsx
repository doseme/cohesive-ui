import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import { TooltipMenu, IData } from './TooltipMenu'

describe('TooltipMenu', () => {
  it('renders items and handles click', () => {
    const item: IData = {
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
})
