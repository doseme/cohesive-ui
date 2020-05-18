import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import { Toggle, IToggleOption } from './Toggle'

describe('Toggle', () => {
  it('changes between selected items', () => {
    const options: IToggleOption[] = [
      { id: 'item-a', value: 'A', label: 'Item A' },
      { id: 'item-b', value: 'B', label: 'Item B', testid: 'item-b' },
    ]
    const Wrapper = () => {
      const [selected, setSelected] = useState('a')
      return (
        <>
          Selected Item is: {selected}
          <Toggle 
            name='Items' 
            options={options} 
            selected='a' 
            onChange={({ id }) => setSelected(id)} 
          />
        </>
      )
    }

    render(<Wrapper />)

    fireEvent.click(screen.getByTestId('item-b'))

    expect(screen.getByText(/Selected Item is: item-b/)).toBeInTheDocument()
  })
})
