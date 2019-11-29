import React from 'react'
import { Form } from 'react-bootstrap'

const FormC: React.FC = (props) => {
  const {
    children
  } = props

  return (
    <Form>
      {children}
    </Form>
  )
}

export {
  FormC as Form
}
