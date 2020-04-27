import React from 'react'

import { TProps } from './types'
import { PanelHeader } from './components/PanelHeader'
import { PanelBody } from './components/PanelBody'

import './index.scss'

const Panel: React.FC<TProps> = ({ title, info, bodyClassName, sections, children }) => {
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

  const body: JSX.Element = (
    <PanelBody bodyClassName={bodyClassName}>
      {
        sections.map(x => 
          <div className='d-flex'>
            <div className='panel-section-side'></div>
            <div className='panel-section' key={x.id}>{x.element}</div>
          </div>
        )
      }
      {children}
    </PanelBody>
  )

  return (
    <div className='panel-outer w-100'>
      {getTitle()}
      {body}
    </div>
    )

}

export {
  Panel
}
