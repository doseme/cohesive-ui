import React from 'react'

import './index.scss'

interface IProps {
  logo: JSX.Element
  menu: JSX.Element
}

const TopNav: React.FC<IProps> = ({ logo, menu }): JSX.Element => {
  return (
    <div
      id='top-nav'
      className='d-flex justify-content-between align-items-center'
    >
      <div className='logo'>
        {logo}
      </div>

      <div className='menu'>
        {menu}
      </div>
    </div>
  )
}

export {
  TopNav
}
