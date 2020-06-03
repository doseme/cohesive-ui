import React, { useState } from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react'

import { Modal } from './Modal'
 

describe('Modal', () => {
  it('changes between selected items', () => {
    const Wrapper = () => {
      const [show, setShow] = useState(true)
      return <Modal show={show} onHide={() => setShow(false)}>Text</Modal>
    }

    render(<Wrapper />)

    expect(screen.queryByText(/Text/)).toBeInTheDocument()
    fireEvent.click(screen.getByTestId('overlay'))

    expect(screen.queryByText(/Text/)).not.toBeInTheDocument()
  })
})
