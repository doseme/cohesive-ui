import React, { useState } from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Dropdown } from '.'
import { IDropdownItem } from './Dropdown'

const stories = storiesOf('Components.Dropdown', module)

const style: React.CSSProperties = {
  whiteSpace: 'pre-wrap',
}

const content = (
  <div style={style}>
    {`<Dropdown variant='primary'>
  This is a dropdown
</Dropdown>`}
  </div>
)


const items: IDropdownItem[] = [
  {
    value: '1',
    label: 'One'
  },
  {
    value: '2',
    label: 'Two'
  }  
]

const DropdownWithDefaultValue = () => {
  const [value, setValue] = useState('1')

  return (
    <React.Fragment>
      <Dropdown
        data={items}
        value={value}
        onSelect={item => setValue(item.value)}
        label='Dropdown with default value'
        placeholder='Select an item'
      />
      <br />
    </React.Fragment>
  )
}

const DropdownIsRequired = () => {
  const [value, setValue] = useState<string>()

  return (
    <React.Fragment>
      <Dropdown
        data={items}
        label='Dropdown with required value'
        value={value}
        isRequired
        onSelect={item => setValue(item.value)}
        placeholder='Select an item'
      />
      <br />
    </React.Fragment>
  )
}

const DropdownNoOptions = () => {
  const [value, setValue] = useState<string>()

  return (
    <React.Fragment>
      <Dropdown
        data={[]}
        label='Dropdown no options'
        value={value}
        isRequired
        onSelect={item => setValue(item.value)}
        placeholder='Select an item'
      />
      <br />
    </React.Fragment>
  )
}

const DropdownDisabled = () => {
  const [value, setValue] = useState<string>()

  return (
    <React.Fragment>
      <Dropdown
        data={[]}
        label='Dropdown disabled'
        value={value}
        disabled={true}
        isRequired
        onSelect={item => setValue(item.value)}
        placeholder='Select an item'
      />
      <br />
    </React.Fragment>
  )
}

stories.add('Components.Dropdown', () => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <Dropdown
        id='listItemsWithSearch'
        label='With items + search'
        showSearchThreshold={5}
        placeholder='Select Hospital'
        data={[
          { label: 'Hospital A', value: '1' },
          { label: 'Hospital B', value: '2' },
          { label: 'Hospital C', value: '3' },
          { label: 'Hospital D', value: '4' },
          { label: 'Hospital E', value: '5' },
          { label: 'Hospital F', value: '6' },
          { label: 'Hospital G', value: '7' },
          { label: 'Hospital H', value: '8' },
          { label: 'Hospital I', value: '9' },
          { label: 'Hospital J', value: '10' },
          { label: 'Hospital K', value: '11' },
          { label: 'Hospital L', value: '12' }
        ]}
        onSelect={noop}
      />
      <br />
      <DropdownIsRequired />
      <DropdownWithDefaultValue />
      <DropdownNoOptions />
      <DropdownDisabled />
    </div>
  )
})

