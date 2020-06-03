import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { RadioGroup } from './RadioGroup'

describe('TextInput', () => {
  test('selects an option', async () => {
    const onSelect = jest.fn()
    const F = { id: 'f', value: 'f', display: 'F' }
    const M = { id: 'm', value: 'm', display: 'M' }

    render(
      <RadioGroup 
        label='This has a default value'
        isRequired={true}
        onSelect={onSelect}
        options={[F, M]}
      />
    )

    fireEvent.click(screen.getByTestId('f'))
    expect(onSelect).toHaveBeenCalledWith(F)
  })
})
