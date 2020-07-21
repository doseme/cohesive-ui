import React from 'react'
import classnames from 'classnames'

export const Active: React.FC<{ className?: string, disabled?: boolean }> = (props) => (
  <svg className={
    classnames(
      'co-unarchive',
      props.className,
      { 'co-icon-disabled': props.disabled }
    )
  } width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white" />
    <rect x="9" y="10" width="14" height="3" />
    <path fillRule="evenodd" clipRule="evenodd" d="M10 14H22V23H10V14Z" />
    <rect x="14" y="16" width="4" height="2" fill="white" />
  </svg>
)
