import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import { ConfirmModal } from './ConfirmModal'
 

describe('ConfirmModal', () => {
  it('changes between selected items', () => {
    const onCancel = jest.fn()
    const onConfirm = jest.fn()
    render(<ConfirmModal entityType='patient' onCancel={onCancel} onConfirm={onConfirm}  />)

    fireEvent.click(screen.getByText(/Erase this patient/))
    fireEvent.click(screen.getByText(/Cancel/))

    expect(onConfirm).toHaveBeenCalled()
    expect(onCancel).toHaveBeenCalled()
  })
})
