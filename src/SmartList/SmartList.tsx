import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { PaginationPanel } from './components/PaginationPanel'
import { Header } from './components/Header'

interface IItem {
  [id: string]: any
}

interface IShapeItem {
  [columnName: string]: {
    attr: string
    size: number
  }
}

interface IProps {
  data: IItem
  shape: IShapeItem
  listItem?: any
}

interface IState {
  currentPageIds: string[]
}

class SmartList extends React.PureComponent<IProps, IState> {
  state: IState = {
    currentPageIds: []
  }

  formatListItem = (id: string): JSX.Element => {
    const itemData = this.props.data[id]

    if (this.props.listItem) {
      const ListItem = this.props.listItem

      return (
        <div key={`list-item-${id}`}>
          <ListItem
            {...itemData}
          />
        </div>
      )
    }

    return (
      <Row key={`row-${id}`}>
        {Object.keys(this.props.shape).map((columnName: string) => {
          const item = this.props.shape[columnName]

          return (
            <Col key={`column-${item.attr}`} sm={item.size}>
              {itemData[item.attr]}
            </Col>
          )
        })}
      </Row>
    )
  }

  updatePageIds = (ids: string[]): void => {
    this.setState({
      ...this.state,
      currentPageIds: ids
    })
  }

  get listItems(): JSX.Element[] | string {
    if (this.state.currentPageIds.length) {
      return this.state.currentPageIds.map(this.formatListItem)
    }

    return 'No data to display'
  }

  get header(): JSX.Element | null {
    if (!this.props.listItem) {
      return (
        <Header
          shape={this.props.shape}
        />
      )
    }

    return null
  }

  render(): JSX.Element {
    return (
      <div>
        <PaginationPanel
          handleUpdate={this.updatePageIds}
          itemIds={Object.keys(this.props.data)}
        >
          {this.header}

          <div>
            {this.listItems}
          </div>
        </PaginationPanel>
      </div>
    )
  }
}

export {
  SmartList,
}
