import React from 'react'
import classnames from 'classnames'

export const Active: React.FC<{ className?: string, disabled?: boolean }> = (props) => (
  <svg className={classnames('co-delete', props.className, { 'co-icon-disabled': props.disabled })} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white" />
    <rect x="9.33325" y="9.33334" width="13.3333" height="2.66667" />
    <rect x="14.6667" y="8" width="2.66667" height="1.33333"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.6667 12H21.3334L19.9771 24H11.986L10.6667 12Z" />
  </svg>
)
