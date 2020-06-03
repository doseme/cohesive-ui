import React from 'react'
import noop from 'lodash/noop'
import { storiesOf } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { Dropdown } from '.'

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


stories.add('Components.Dropdown', () => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <h3 className='m-5'>With List of Items + No Search</h3>
      <div className='m-5'>
        <Dropdown
          id='listItemsNoSearch'
          className='hasName'
          placeholder='Select Hospital'
          data={[
            {label: 'Hospital A', value: '1'},
            {label: 'Hospital B', value: '2'},
            {label: 'Hospital C', value: '3'}
          ]}
          onSelect={noop}
        />
      </div>

      <hr />

      <h3 className='m-5'>With List of Items + Search</h3>
      <div className='m-5'>
        <Dropdown 
          id='listItemsWithSearch'
          placeholder='Select Hospital'
          data={[
            {label: 'Hospital A', value: '1'},
            {label: 'Hospital B', value: '2'},
            {label: 'Hospital C', value: '3'},
            {label: 'Hospital D', value: '4'},
            {label: 'Hospital E', value: '5'},
            {label: 'Hospital F', value: '6'},
            {label: 'Hospital G', value: '7'},
            {label: 'Hospital H', value: '8'},
            {label: 'Hospital I', value: '9'},
            {label: 'Hospital J', value: '10'},
            {label: 'Hospital K', value: '11'},
            {label: 'Hospital L', value: '12'}
          ]}
          onSelect={noop}
        />
      </div>


      <hr />

      <h3 className='m-5'>Custom Content Dropdown</h3>
      <div className='m-5'>
        <Dropdown 
          id='customContentDropdown'
          placeholder='Custom Content Dropdown'
          onSelect={noop}
        >
          {content}
        </Dropdown>
      </div>

      <hr />

      <h3 className='m-5'>With Default Value</h3>
      <div className='m-5'>
        <Dropdown 
          id='withDefaultValue'
          placeholder='Select Hospital'
          data={[
            {label: 'Hospital A', value: '1'},
            {label: 'Hospital B', value: '2'},
            {label: 'Hospital C', value: '3'}
          ]}
          onSelect={noop}
          defaultValue='2'
        />
      </div>

      <hr />

      <h3 className='m-5'>With Field Label</h3>
      <div className='m-5'>
        <Dropdown 
          id='withLabel'
          label='Select a Hospital'
          placeholder='Select Hospital'
          data={[
            {label: 'Hospital A', value: '1'},
            {label: 'Hospital B', value: '2'},
            {label: 'Hospital C', value: '3'}
          ]}
          onSelect={noop}
        />
      </div>

      <hr />

      <h3 className='m-5'>Optional Item Labels</h3>
      <div className='m-5'>
        <Dropdown 
          id='withLabel'
          label='Select a Hospital'
          placeholder='Select Hospital'
          data={[
            {value: '1'},
            {label: 'Hospital B', value: '2'},
            {label: 'Hospital C', value: '3'}
          ]}
          onSelect={noop}
        />
      </div>

      <hr />

      <h3 className='m-5'>Error on blur with nothing selected</h3>
      <div className='m-5'>
        <Dropdown 
          id='withLabel'
          label='Select a Hospital'
          placeholder='Select Hospital'
          isRequired
          data={[
            {value: '1'},
            {label: 'Hospital B', value: '2'},
            {label: 'Hospital C', value: '3'}
          ]}
          onSelect={noop}
        />
      </div>
    </div>
  )
})

