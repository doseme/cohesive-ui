import React from 'react'
import classnames from 'classnames'

import './index.scss'

interface ISearchHintProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SearchHint: React.FC<ISearchHintProps> = (props) => {
  return (
    <div className='co-search-hint-wrapper'>
      <div 
        {...props}
        className={classnames('co-search-hint d-flex justify-content-center align-items-center', props.className)}
      >
        {props.children}
      </div>
    </div>
  )
}
