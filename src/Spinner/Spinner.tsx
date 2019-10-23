import React from 'react'
import BsSpinner, { SpinnerProps } from 'react-bootstrap/Spinner'

class Spinner extends React.PureComponent<SpinnerProps> {
  static defaultProps = {
    animation: 'border'
  }

  public render(): JSX.Element {
    return (
      <BsSpinner style={{fontSize: '16px'}} {...this.props}>
        <span className='sr-only'>Loading...</span>
      </BsSpinner>
    )
  }
}

export {
  Spinner
}
