import React from 'react'
import classnames from 'classnames'
import './index.scss'

export const Active: React.FC<{ className?: string, disabled?: boolean }> = (props) => (
  <svg className={classnames('co-chevron', props.className, { 'co-icon-disabled': props.disabled })} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="
      M8, 14
      L 17, 22
      M15, 22
      L 24, 14
    " stroke="#AEAEAE" stroke-width="3"/>
  </svg>
)