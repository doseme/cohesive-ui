import noop from 'lodash/noop'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Dropdown } from './'

describe('Dropdown', () => {
  it('selects a value', () => {
    const onBlur = jest.fn()
    render(
      <Dropdown 
        placeholder='DEV'
        data={[
          {label: 'Item 1', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'}
        ]}
        onSelect={noop}
        onBlur={onBlur}
      />
    )

    fireEvent.click(screen.getByTestId('current-item'))
    fireEvent.click(screen.getByTestId('Item 1'))

    expect(onBlur).toHaveBeenCalledWith({ label: 'Item 1', value: '1' }, true)
  })

  it('has a default value', () => {
    render(
      <Dropdown 
        placeholder='DEV'
        data={[
          {label: 'Item 1', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'}
        ]}
        onSelect={noop}
        defaultValue='2'
      />
    )

    expect(screen.getByText(/Item 2/)).toBeInTheDocument()
  })

  it('validates required on blur', () => {
    render(
      <>
        <div data-testid='other'></div>
        <Dropdown
          placeholder='DEV'
          label='Select a hopsital'
          data={[
            { label: 'Item 1', value: '1' },
            { label: 'Item 2', value: '2' },
            { label: 'Item 3', value: '3' }
          ]}
          isRequired
          onSelect={noop}
        />
      </>
    )

    fireEvent.click(screen.getByTestId('current-item'))
    // simulate clicking away from the dropdown without making a selection
    fireEvent.mouseDown(screen.getByTestId('other'))

    expect(screen.getByText(/This field is required/)).toBeInTheDocument()
  })
})