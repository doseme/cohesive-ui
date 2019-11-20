import React from 'react'

import './index.scss'

interface IProps {
  topNav: JSX.Element
  sideNav: JSX.Element
  footer: JSX.Element
}

const NavLayout: React.FC<IProps> = ({ topNav, sideNav, footer, children }): JSX.Element => {
  return (
    <div className='layout'>
      {topNav}
      <div className='d-flex'>
        {sideNav}

        <div className='p-3'>
          {children}
        </div>
      </div>
      {footer}
    </div>
  )
}

export {
  NavLayout
}
