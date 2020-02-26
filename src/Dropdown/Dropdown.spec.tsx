import noop from 'lodash/noop'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme'

import { Dropdown } from './'

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  it('selects a value', () => {
    const wrapper = mount(
      <Dropdown 
        placeholder='DEV'
        data={[
          {label: 'Item 1', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'}
        ]}
        onSelect={noop}
      />
    )
    expect(wrapper.find('[data-test-current-item]').text()).toBe('DEV')

    wrapper.find('[data-test-current-item]').simulate('click')
    wrapper.find('[data-test="Item 1"]').simulate('click')

    expect(wrapper.find('[data-test-current-item]').text()).toBe('Item 1')
  })

  it('has a default value', () => {
    const wrapper = mount(
      <Dropdown 
        placeholder='DEV'
        data={[
          {label: 'Item 1', value: '1'},
          {label: 'Item 2', value: '2'},
          {label: 'Item 3', value: '3'}
        ]}
        defaultIndex={1}
        onSelect={noop}
      />
    )
    expect(wrapper.find('[data-test-current-item]').text()).toBe('Item 2')
  })
})