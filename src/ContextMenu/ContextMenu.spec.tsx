import noop from 'lodash/noop'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { mount } from 'enzyme'

import { ContextMenu, IListItem } from './ContextMenu'

Enzyme.configure({ adapter: new Adapter() })

const onClick = jest.fn()

const items: IListItem[] = [
  {
    id: 1,
    icon: <span />,
    text: 'Settings',
    onClick,
  },
  {
    id: 2,
    icon: <span />,
    text: 'Back to DoseMe'
  },
]

describe('ContextMenu', () => {
  it('renders without problems', () => {
    const wrapper = mount(
      <ContextMenu 
        header='Cohesive UI'
        items={items}
      />
    )

    wrapper.find('[data-test-item]').at(0).simulate('click')
    // Need to use `hostNodes` https://github.com/airbnb/enzyme/issues/1393
    // Enzyme kinda sucks 
    expect(onClick).toHaveBeenCalled()
    expect(wrapper.find('[data-test-head]').hostNodes()).toHaveLength(1)
    expect(wrapper.find('[data-test-item]').hostNodes()).toHaveLength(2)
  })
})
