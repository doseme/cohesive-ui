import React from 'react'
import './index.scss'
import * as BS from 'react-bootstrap'
import { AdminLogo } from './AdminLogo'
import { SideNav } from './SideNav'
import { Navbar } from './Navbar'


interface IProps {
  logo: JSX.Element | null
}

const Greet: React.FC<IProps> = ({ logo }): JSX.Element => {
  return (
    <div className="bg"><BS.Button>Button!!!!</BS.Button></div>
  )
}

export {
  AdminLogo,
  Greet,
  Navbar,
  SideNav,
}
