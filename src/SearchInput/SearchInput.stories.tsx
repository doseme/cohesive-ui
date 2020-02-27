import React, { useState } from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'

import { SearchInput } from './SearchInput'


storiesOf('Components.SearchInput', module)
  .add('Required input, 20 max length', () => {
    const [searchText1, setSearchText1] = useState('')
    const [searchText2, setSearchText2] = useState('')

    return (
      <>
        <div className='m-4'>
          <h3>Search Input</h3>
          <SearchInput
            value={searchText1}
            onChange={setSearchText1}
          />
        </div>
        <br />
        <br />

        <div className='m-4'>
          <h3>Search Input with custom placeholder text</h3>
          <SearchInput
            value={searchText2}
            onChange={setSearchText2}
            placeholder='Find it here!...'
          />
        </div>
      </>
    )
  })
