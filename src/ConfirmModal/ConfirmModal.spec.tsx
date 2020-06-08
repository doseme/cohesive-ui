import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen, act } from '@testing-library/react'

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

  it('has load state', async () => {
    const onCancel = jest.fn()
    const neverResolve = () => new Promise(res => setTimeout(res, 100000))
    render(<ConfirmModal entityType='patient' onCancel={onCancel} onConfirm={neverResolve} />)

    fireEvent.click(screen.getByText(/Erase this patient/))
    screen.getByTestId('loading')
  })

  it('has error state', async () => {
    const onCancel = jest.fn()
    const throwError = () => new Error('An error')
    render(<ConfirmModal entityType='patient' onCancel={onCancel} onConfirm={throwError} />)

    act(async () => {
      fireEvent.click(screen.getByText(/Erase this patient/))
      await screen.findByText('An error')
      expect(screen.queryByTestId('loading')).not.toBeInTheDocument()
    })
  })
})
