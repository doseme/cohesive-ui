import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Collapse from 'react-bootstrap/NavbarCollapse'
import Nav from 'react-bootstrap/Nav'

import './index.scss'

interface IProps {
  logo: JSX.Element | null
}

const NavbarC: React.FC<IProps> = ({ logo }): JSX.Element => {
  return (
    <>
      <Navbar expand='lg'>
        <Navbar.Brand>
          {logo}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Collapse>
          <Nav className='mr-auto' />
        </Collapse>
      </Navbar>
    </>
  )
}

export {
  NavbarC as Navbar
}
