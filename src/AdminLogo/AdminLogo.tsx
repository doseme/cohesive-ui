import React from 'react'

import './index.scss'

const AdminLogo: React.FC = (): JSX.Element => {
  return (
    <div className='logopanel'>
      <h1>
        doseme <span className='text-teal'>[ </span>admin<span className='text-teal'> ]</span>
      </h1>
    </div>
  )
}

export {
  AdminLogo
}
