import React from 'react'

import { PanelHeader } from './components/PanelHeader'
import { PanelBody } from './components/PanelBody'

import './index.scss'

export interface ISection {
  id: number
  element: JSX.Element
}

export interface IPanelHeaderProps { 
  title?: string
  headerClass?: string
  info?: string
  loading?: boolean
}

export interface IPanelBodyProps {
  bodyClassName?: string
}

export interface IPanelProps {
  sections: ISection[]
  className?: string
  loading?: boolean
}

export type TProps = IPanelProps & IPanelHeaderProps & IPanelBodyProps

const Panel: React.FC<TProps> = ({ title, info, bodyClassName, sections, children, headerClass, loading }) => {
  const getTitle = (): JSX.Element | null => {
    if (!title) {
      return null
    }

    return (
      <PanelHeader
        title={title}
        info={info}
        headerClass={headerClass}
        loading={loading}
      />
    )
  }

  const body: JSX.Element = (
    <PanelBody bodyClassName={bodyClassName}>
      {
        sections.map((x, idx) => 
          <div className='d-flex'>
            <div className={`panel-section-side`}></div>
            <div className={`panel-section  ${idx > 0 ? 'with-border' : ''}`} key={x.id}>{x.element}</div>
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
