import React from 'react'
import { IconProps } from './'

export const Unarchive: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect className='is-outline' x="1.62695" y="0.23938" width="14" height="3" transform="rotate(15 1.62695 0.23938)" fill={props.background || '#AEAEAE'} />
      <path className='is-outline' fillRule="evenodd" clipRule="evenodd" d="M1 7H13V16H1V7Z" fill={props.background || '#AEAEAE'} />
      <rect x="5" y="9" width="4" height="2" fill="white"/>
    </svg>
  )
}
