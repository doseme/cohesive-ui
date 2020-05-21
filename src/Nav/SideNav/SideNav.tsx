import React from 'react'

import { SideNavLink } from './components/SideNavLink'

import './index.scss'

export interface INavLink {
  icon: JSX.Element
  label: string
  route: string
}

interface IProps {
  navLinks: INavLink[]
  handleNavTo: (route: string) => void
}

const SideNav: React.FC<IProps> = ({ navLinks, handleNavTo }): JSX.Element => {

  const sideNavLinks = navLinks.map(link =>
    <SideNavLink
      handleNavigateTo={() => {
        handleNavTo(link.route)
      }}
      icon={link.icon}
      label={link.label}
      route={link.route}
      key={link.label}
    />
  )

  return (
    <nav
      id='sidenav'
      className='d-flex flex-column align-items-start'
    >
      {sideNavLinks}
    </nav>
  )
}

export {
  SideNav
}

