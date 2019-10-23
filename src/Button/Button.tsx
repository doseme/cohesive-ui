import React from 'react'

import { Button as BSButton, ButtonProps } from 'react-bootstrap'

import './index.scss'

interface IOwnProps {
  onClick?: () => void
  className?: string
}

class Button extends React.PureComponent<ButtonProps & IOwnProps> {
  public render(): JSX.Element {
    return (
      <BSButton {...this.props}>
        {this.props.children}
      </BSButton>
    )
  }
}

export {
  Button
}
