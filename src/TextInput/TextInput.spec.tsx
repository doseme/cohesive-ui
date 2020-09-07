import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent, act } from '@testing-library/react'

import { TextInput, IAsyncValidationResult } from './TextInput'

const noop = jest.fn()

describe('TextInput', () => {
  it('works', async () => {
    const wrapper = render(
      <TextInput 
        label='This has a default value'
        name='my-input'
        maxInputLength={20}
        isRequired={true}
        defaultValue='Default value'
        onChange={noop}
        onBlur={noop}
        units='mg'
      />
    )

    // type some text and blur - input is valid
    act(() => {
      fireEvent.change(screen.getByTestId('my-input'), { target: { value: 'value' } })
      fireEvent.blur(screen.getByTestId('my-input'))
    })
    expect(wrapper.queryByText(/Required/)).toBeNull()

    // set to empty string and blur - now the input is invalid
    act(() => {
      fireEvent.change(wrapper.getByTestId('my-input'), { target: { value: '' } })
      fireEvent.blur(wrapper.getByTestId('my-input'))
    })

    expect(await wrapper.findByText(/Required/)).toBeInTheDocument()
    wrapper.getByText('mg')
  })

  it('validates asynchronously', async () => {
    let valid = true
    let message = 'All good'
    const asyncValidator = async (): Promise<IAsyncValidationResult> => {
      return new Promise(res => res({ valid, message }))
    }

    const wrapper = render(
      <TextInput
        label='Async validation'
        name='my-input'
        onChange={noop}
        onBlur={noop}
        asyncValidator={asyncValidator}
      />
    )

    act(() => {
      fireEvent.change(screen.getByTestId('my-input'), { target: { value: 'value' } })
      fireEvent.blur(screen.getByTestId('my-input'))
    })

    expect(await wrapper.findByText(/checking system/)).toBeTruthy()
    expect(await wrapper.findByText(/All good/)).toBeTruthy()

    valid = false
    message = 'No good'
    act(() => {
      fireEvent.change(screen.getByTestId('my-input'), { target: { value: 'value' } })
      fireEvent.blur(screen.getByTestId('my-input'))
    })

    expect(await wrapper.findByText(/checking system/)).toBeTruthy()
    expect(await wrapper.findByText(/No good/)).toBeTruthy()
  })
})
