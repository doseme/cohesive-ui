import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'

import { TextInput } from './TextInput'

describe('TextInput', () => {
  it('works', async () => {
    const noop = jest.fn()
    const { debug } = render(
      <TextInput 
        label='This has a default value'
        name='my-input'
        maxInputLength={20}
        isRequired={true}
        defaultValue='Default value'
        onChange={noop}
        onBlur={noop}
      />
    )

    // type some text and blur - input is valid
    fireEvent.change(screen.getByTestId('my-input'), { target: { value: 'value' } })
    fireEvent.blur(screen.getByTestId('my-input'))
    expect(screen.queryByTestId(/This field is required/)).toBeNull()

    // set to empty string and blur - now the input is invalid
    fireEvent.change(screen.getByTestId('my-input'), { target: { value: '' } })
    fireEvent.blur(screen.getByTestId('my-input'))

    expect(screen.queryByText(/This field is required/)).toBeInTheDocument()
  })
})
