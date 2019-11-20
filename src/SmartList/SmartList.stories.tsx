import React from 'react'
import { storiesOf } from '@storybook/react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { SmartList } from './SmartList'
import { IColumnName } from './types'

const stories = storiesOf('Components.SmartList', module)

const dataObjects = {
  1: {
    name: 'Name 1',
    description: 'Description 1'
  },
  2: {
    name: 'Name 2',
    description: 'Description 2'
  },
  3: {
    name: 'Name 3',
    description: 'Description 3'
  },
  4: {
    name: 'Name 4',
    description: 'Description 4'
  },
  5: {
    name: 'Name 5',
    description: 'Description 5'
  },
  6: {
    name: 'Name 6',
    description: 'Description 6'
  },
  7: {
    name: 'Name 7',
    description: 'Description 7'
  },
  8: {
    name: 'Name 8',
    description: 'Description 8'
  },
  9: {
    name: 'Name 9',
    description: 'Description 9'
  },
  10: {
    name: 'Name 10',
    description: 'Description 10'
  },
}

const columnDisplay: IColumnName[] = [
  {
    keyName: 'name',
    displayName: 'Name'
  },
  {
    keyName: 'description',
    displayName: 'Description'
  }
]
    
const dataJSX = {
  1: <div><b>Item 1</b></div>,
  2: <div><i>Item 2</i></div>,
  3: <div><u>Item 3</u></div>,
  4: <div>Item 4</div>,
  5: <div>Item 5 wants to tell you that in <i>actual</i> use individual list items probably won't be different, but that you can provide your own fully styled component(s) to this version of the list.</div>,
  6: <div>Item 6</div>,
  7: <div>Item 7 with some extra info</div>,
  8: <div>Item 8</div>,
  9: <div>Item 9</div>,
  10: <div>Item 10</div>
}
    
stories.add(
  'JSX',
  () =>
    <SmartList
      data={dataJSX}
      customHeader={(
        <div><h1>This is a custom list header!!!</h1></div>
      )}
    />
)

stories.add(
  'Data',
  () =>
    <SmartList
      data={dataObjects}
      columnDisplay={columnDisplay}
    />
)

stories.add(
  'Empty',
  () =>
    <SmartList
      data={{}}
    />
)
