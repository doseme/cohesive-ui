import React from 'react'

import { IProps } from './types'
import { PanelHeader } from './components/PanelHeader'
import { PanelBody } from './components/PanelBody'

import './index.scss'

class Panel extends React.PureComponent<IProps> {
  private get title(): JSX.Element | null {
    if (!this.props.title) {
      return null
    }

    return (
      <PanelHeader
        title={this.props.title}
        info={this.props.info}
      />
    )
  }

  private get body(): JSX.Element {
    return (
      <PanelBody bodyClassName={this.props.bodyClassName}>
        {this.props.children}
      </PanelBody>
    )
  }

  public render(): JSX.Element {
    return (
      <div className='panel-outer w-100'>
        {this.title}
        {this.body}
      </div>
    )
  }
}

export {
  Panel
}
