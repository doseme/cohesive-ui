import React from 'react'
import * as BS from 'react-bootstrap'

import './index.scss'

interface IProps {
  handleNavigateTo: () => void
  label: string
  route: string
  icon: JSX.Element
}

const SideNavLink: React.FC<IProps> = ({
  handleNavigateTo,
  label,
  route,
  icon,
}): JSX.Element => {
  const base = 'm-1 w-100 text-muted d-flex align-items-center'
  const className = location.pathname.includes(route)
    ? `navbar-selected ${base}`
    : base

  return (
    <BS.Nav
      onClick={handleNavigateTo}
      className={className}
    >
      {icon}
      <span className='ml-2 link-label'>{label}</span>
    </BS.Nav>
  )
}

export {
  SideNavLink
}
