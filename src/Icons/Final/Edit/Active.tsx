import React from 'react'
import classnames from 'classnames'

export const Active: React.FC<{ className?: string, disabled?: boolean }> = (props) => (
  <svg className={
    classnames(
      'co-edit',
      props.className,
      { 'co-icon-disabled': props.disabled }
    )
  } width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="white" />
    <path fillRule="evenodd" clipRule="evenodd" d="M15.3987 20.5534L11.9346 18.5534L10.1498 24.8692C10.037 25.2686 10.532 25.5544 10.8214 25.2569L15.3987 20.5534Z" />
    <path fillRule="evenodd" clipRule="evenodd" d="M21.732 9.58376C22.2843 8.62718 21.9565 7.40399 21 6.85171C20.0434 6.29943 18.8202 6.62718 18.2679 7.58376L18.0207 8.01197L21.4848 10.012L21.732 9.58376ZM20.8181 11.1667L17.354 9.16667L11.9346 18.5534L15.3987 20.5534L20.8181 11.1667Z" />
  </svg>
)
