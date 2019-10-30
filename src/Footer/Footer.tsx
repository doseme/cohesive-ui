import React from 'react'

import './index.scss'

const Footer: React.FC = ({ children }): JSX.Element => {
  return (
    <footer
      id='footer'
      className='d-flex align-items-center py-2'
    >
      { children }
    </footer >
  )
}

export {
  Footer
}
