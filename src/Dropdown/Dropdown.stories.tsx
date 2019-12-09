import React from 'react'
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

const noop = () => {/***/}

stories.add('Components.Dropdown', () => {
  return (
    <>
      <h3 className='m-5'>With List of Items + No Search</h3>
      <div className='m-5'>
        <Dropdown 
          title='Select Hospital'
          data={['Hospital A', 'Hospital B', 'Hospital C']}
          onSelect={noop}
          searchIcon={searchIcon}
        />
      </div>

      <hr />

      <hr />

      <h3 className='m-5'>With List of Items + Search</h3>
      <div className='m-5'>
        <Dropdown 
          title='Select Hospital'
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
          title='Custom Content Dropdown'
          onSelect={noop}
        >
          {content}
        </Dropdown>
      </div>
    </>
  )
})