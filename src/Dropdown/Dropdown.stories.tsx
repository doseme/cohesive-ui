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


const searchIcon = (
  <FontAwesomeIcon
    icon={faSearch}
  />
)

stories.add('Components.Dropdown', () => {
  return (
    <div style={{ maxWidth: '500px' }}>
      <h3 className='m-5'>With List of Items + No Search</h3>
      <div className='m-5'>
        <Dropdown 
          placeholder='Select Hospital'
          data={['Hospital A', 'Hospital B', 'Hospital C']}
          onSelect={noop}
          searchIcon={searchIcon}
        />
      </div>

      <hr />

      <h3 className='m-5'>With List of Items + Search</h3>
      <div className='m-5'>
        <Dropdown 
          placeholder='Select Hospital'
          data={[
            'Hospital A', 
            'Hospital B', 
            'Hospital C', 
            'Hospital D',
            'Hospital E', 
            'Hospital F', 
            'Hospital G', 
            'Hospital H',
            'Hospital I', 
            'Hospital J', 
            'Hospital K', 
            'Hospital L',
          ]}
          onSelect={noop}
          searchIcon={searchIcon}
        />
      </div>


      <hr />

      <h3 className='m-5'>Custom Content Dropdown</h3>
      <div className='m-5'>
        <Dropdown 
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
          placeholder='Select Hospital'
          data={['Hospital A', 'Hospital B', 'Hospital C']}
          onSelect={noop}
          searchIcon={searchIcon}
          defaultValue='Hospital C'
        />
      </div>
    </div>
  )
})