import React from 'react'
import * as BS from 'react-bootstrap'

import './index.scss'

interface IProps {
  logo: JSX.Element | null
}

interface INavLink {
  icon: JSX.Element
  label: string
  route: string
}

const NavbarC: React.FC<IProps> = ({ logo }): JSX.Element => {
  return (
    <BS.Navbar expand='lg'>
      <BS.Navbar.Brand>
        {logo}
      </BS.Navbar.Brand>
      <BS.Navbar.Toggle aria-controls='basic-navbar-nav' />
      <BS.Collapse>
        <BS.Nav className='mr-auto' />
      </BS.Collapse>
    </BS.Navbar>
  )
}

export {
  NavbarC as Navbar,
  INavLink
}
