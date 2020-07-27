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

      <hr />

      {/* <h3 className='m-5'>With disable options</h3>
      <div className='m-5'>
        <Dropdown 
          id='withLabel'
          label='Select a Hospital'
          placeholder='Select Hospital'
          isRequired
          data={[
            {value: '1'},
            {label: 'Hospital B', value: '2', disabled: true},
            {label: 'Hospital C', value: '3'}
          ]}
          onSelect={noop}
        />
      </div> */}
    </div>
  )
})

