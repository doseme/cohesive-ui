import React from 'react'
import { storiesOf } from '@storybook/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import { TopNav } from './TopNav'
import { SideNav } from '../SideNav'
import { NavLayout } from './NavLayout'
import { INavLink } from '../Navbar'

const stories = storiesOf('Components.TopNav', module)

const logo = (
  <img src='https://doseme-rx.com/wp-content/themes/doseMe/img/logo.svg' />
)

const icon = (
  <FontAwesomeIcon
    className='m-2'
    icon={faUser}
  />
)

const navLinks: INavLink[] = [
  {
    icon,
    label: 'Installations',
    route: '/installations',
  }
]

const topNav = (
  <TopNav
    logo={logo}
    menu={<button>Button</button>}
  />
)

const sideNav = (
  <SideNav
    navLinks={navLinks}
    handleNavTo={() => { }}
  />
)

stories.add('Nav', () => {
  return (
    <NavLayout
      topNav={topNav}
      sideNav={sideNav}
    >
      <div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
        <div>Some content goes here</div>
      </div>
    </NavLayout>
  )
})
