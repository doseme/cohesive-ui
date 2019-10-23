import React from 'react'

import { IProps } from '../../types'
import './index.scss'

class PanelBody extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    return (
      <div className={`panel ${this.props.bodyClassName}`}>
        {this.props.children}
      </div>
    )
  }
}

export {
  PanelBody
}
