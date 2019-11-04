import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SmartList } from './SmartList'

const stories = storiesOf('Components.SmartList', module)

class ListItem extends React.PureComponent<{ name: string, description: string }> {
  render(): JSX.Element {
    const {
      name,
      description
    } = this.props

    return (
      <Row>
        <Col sm={2}>
          {name}
        </Col>
        <Col sm={2}>
          This is a static row
        </Col>
        <Col sm={2}>
          {description}
        </Col>
      </Row>
    )
  }
}

const data = {
  '1': {
    name: 'Test 1',
    description: 'Description 1'
  },
  '2': {
    name: 'Test 2',
    description: 'Description 2'
  },
  '3': {
    name: 'Test 3',
    description: 'Description 3'
  },
  '4': {
    name: 'Test 4',
    description: 'Description 4'
  },
  '5': {
    name: 'Test 5',
    description: 'Description 5'
  },
  '6': {
    name: 'Test 6',
    description: 'Description 6'
  },
  '7': {
    name: 'Test 7',
    description: 'Description 7'
  },
  '8': {
    name: 'Test 8',
    description: 'Description 8'
  },
  '9': {
    name: 'Test 9',
    description: 'Description 9'
  },
  '10': {
    name: 'Test 10',
    description: 'Description 10'
  }
}

stories.add(
  'Generic',
  () =>
    <SmartList
      data={data}
      shape={{
        'Name': {
          attr: 'name',
          size: 3
        },
        'Description': {
          attr: 'description',
          size: 3
        }
      }}
    />
)

stories.add(
  'Custom list item',
  () =>
    <SmartList
      data={data}
      shape={{
        'Name': {
          attr: 'name',
          size: 3
        },
        'Description': {
          attr: 'description',
          size: 3
        }
      }}
      listItem={ListItem}
    />
)

stories.add(
  'Empty',
  () =>
    <SmartList
      data={[]}
      shape={{
        'Name': {
          attr: 'name',
          size: 3
        },
        'Description': {
          attr: 'description',
          size: 3
        }
      }}
    />
)
