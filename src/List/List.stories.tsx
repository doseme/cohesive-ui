import React from 'react'
import { storiesOf } from '@storybook/react'

import { List, IRowData } from '.'

const dataObjects: IRowData[] = [
  {
    id: 1,
    name: 'Name 1',
    description: 'Description 1'
  },
  {
    id: 2,
    name: 'Name 2',
    description: 'Description 2'
  },
  {
    id: 3,
    name: 'Name 3',
    description: 'Description 3'
  },
  {
    id: 4,
    name: 'Name 4',
    description: 'Description 4'
  },
  {
    id: 5,
    name: 'Name 5',
    description: 'Description 5'
  },
  {
    id: 6,
    name: 'Name 6',
    description: 'Description 6'
  },
  {
    id: 7,
    name: 'Name 7',
    description: 'Description 7'
  },
  {
    id: 8,
    name: 'Name 8',
    description: 'Description 8'
  },
  {
    id: 9,
    name: 'Name 9',
    description: 'Description 9'
  },
  {
    id: 10,
    name: 'Name 10',
    description: 'Description 10'
  }
]

storiesOf('Components.List', module)
  .add('A basic list', () => {
    return (
      <List
        data={dataObjects}
      />
    )
  })
