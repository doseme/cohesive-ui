import React from 'react'
import * as BS from 'react-bootstrap'

import { SideNavLink } from './components/SideNavLink'
import { INavLink } from '..'

import './index.scss'

interface IProps {
  navLinks: INavLink[]
  handleNavTo: (route: string) => void
}

const SideNav: React.FC<IProps> = ({ navLinks, handleNavTo }) => {

  const sideNavLinks = (): JSX.Element[] | undefined => {
    if (navLinks) {
      return navLinks.map(link =>
        <SideNavLink
          handleNavigateTo={() => {
            handleNavTo(link.route)
          }}
          faIcon={link.icon}
          label={link.label}
          route={link.route}
          key={link.label}
        />
      )
    }
  }

  return (
    <BS.Navbar
      id='sidenav'
      className='d-flex flex-column align-items-start bg-white'
    >
      {sideNavLinks()}
    </BS.Navbar>
  )
}

export {
  SideNav
}

