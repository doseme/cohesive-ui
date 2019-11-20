import React from 'react'

interface IProps {
  topNav: JSX.Element
  sideNav: JSX.Element
}

const NavLayout: React.FC<IProps> = ({ topNav, sideNav, children }): JSX.Element => {
  return (
    <div style={{ background: 'silver' }}>
      {topNav}
      <div className='d-flex'>
        {sideNav}

        <div className='p-3'>
          {children}
        </div>
      </div>
    </div>
  )
}

export {
  NavLayout
}
