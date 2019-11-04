import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { IProps } from './types'

import './index.scss'

class Header extends React.PureComponent<IProps> {
  public render(): JSX.Element {
    return (
      <Row
        id='smart-list-header'
        className='pt-2 pb-2 d-flex align-items-center'
      >
        {Object.keys(this.props.shape).map((columnName: string) =>
          <Col key={`header-column-${columnName}`} sm={this.props.shape[columnName].size}>
            {columnName}
          </Col>
        )}
      </Row>
    )
  }
}

export {
  Header
}
