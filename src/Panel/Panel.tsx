import React from 'react'

import { IProps } from './types'
import { PanelHeader } from './components/PanelHeader'
import { PanelBody } from './components/PanelBody'

import './index.scss'

const Panel: React.FC<IProps> = ({ title, info, bodyClassName, sections, children }) => {
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
        sections?.map(x =>
          <div key={x.id}>{x.element}</div>
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
