import React from 'react'

import { PaginationPanel } from './components/PaginationPanel'

interface IItem {
  [id: string]: any
}

interface IProps {
  data: IItem
  listItem: any
  listName: string
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
    const ListItem = this.props.listItem

    return (
      <div key={`list-item-${id}`}>
        <ListItem
          {...itemData}
        />
      </div>
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

  render(): JSX.Element {
    return (
      <div>
        <PaginationPanel
          handleUpdate={this.updatePageIds}
          allItems={Object.keys(this.props.data)}
          listName={this.props.listName}
        >
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
