import React from 'react'

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
    ? `co-nav-link co-nav-link-selected ${base}`
    : `co-nav-link base`

  return (
    <nav
      onClick={handleNavigateTo}
      className={className}
    >
      {icon}
      <span className='ml-2 link-label'>{label}</span>
    </nav>
  )
}

export {
  SideNavLink
}
