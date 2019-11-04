import * as React from 'react'
import { storiesOf } from '@storybook/react'

import { SmartList } from './SmartList'

const stories = storiesOf('Components', module)

class ListItem extends React.PureComponent<{ name: string }> {
  render(): JSX.Element {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

stories.add(
  'SmartList',
  () =>
    <SmartList
      listName='Test Smart List'
      data={{
        '1': {
          name: 'Test 1'
        },
        '2': {
          name: 'Test 2'
        },
        '3': {
          name: 'Test 3'
        },
        '4': {
          name: 'Test 4'
        },
        '5': {
          name: 'Test 5'
        },
        '6': {
          name: 'Test 6'
        },
        '7': {
          name: 'Test 7'
        },
        '8': {
          name: 'Test 8'
        },
        '9': {
          name: 'Test 9'
        },
        '10': {
          name: 'Test 10'
        }
      }}
      listItem={ListItem}
    />
)
