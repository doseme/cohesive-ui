import React from 'react'

import { IProps } from './types'
import { PanelHeader } from './components/PanelHeader'
import { PanelBody } from './components/PanelBody'

import './index.scss'

const Panel: React.FC<IProps> = ({ title, info, bodyClassName, children }) => {
  const getTitle = (): JSX.Element | null => {
    if (!title) {
      return null
    }

    return (
      <PanelHeader
        title={title}
        info={info}
      />
    )
  }

  const getBody = (): JSX.Element | null => {
    return (
      <PanelBody bodyClassName={bodyClassName}>
        {children}
      </PanelBody>
    )
  }

  return (
    <div className='panel-outer w-100'>
      {getTitle()}
      {getBody()}
    </div>
    )

}

export {
  Panel
}
