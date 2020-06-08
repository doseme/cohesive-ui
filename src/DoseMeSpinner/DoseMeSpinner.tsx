import React from 'react'

import { ThinSpinner } from '../Icons/ThinSpinner'
import { DoseMe } from '../Icons/DoseMe'
import './index.scss'

const DoseMeSpinner: React.FC = props => {
  return (
    <div className='co-doseme-spinner'>
      <ThinSpinner />
      <DoseMe />
    </div>

  )
}

export {
  DoseMeSpinner
}