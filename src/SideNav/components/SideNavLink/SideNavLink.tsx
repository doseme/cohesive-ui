import React from 'react'
import * as BS from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import './index.scss'

interface IProps {
  handleNavigateTo: () => void
  label: string
  route: string
  faIcon: IconProp
}

const SideNavLink: React.FC<IProps> = ({
  handleNavigateTo,
  label,
  route,
  faIcon
}) => {
  const getClassName = (): string => {
    const base = 'm-1 w-100 text-muted d-flex align-items-center'

    if (location.pathname.includes(route)) {
      return `navbar-selected ${base}`
    }
    return base
  }

  return (
    <BS.Nav
      onClick={handleNavigateTo}
      className={getClassName()}
    >
      <FontAwesomeIcon
        className='m-2'
        icon={faIcon}
      />
      <span className='ml-2 link-label'>{label}</span>
    </BS.Nav>
  )
}

export {
  SideNavLink
}
