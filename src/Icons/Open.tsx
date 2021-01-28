
import React from 'react'
import { IconProps } from './'

export const Open: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 13.5V4.5H5V2H2C0.895431 2 0 2.89543 0 4V14C0 15.1046 0.89543 16 2 16H12C13.1046 16 14 15.1046 14 14V11H11.5V13.5H2.5Z" fill={props.background || '#438BE9'}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00008 -1.01599e-06L15.0001 -9.31696e-07C15.5524 -1.26887e-06 16.0001 0.447714 16.0001 0.999999L16.0001 8C16.0001 8.55229 15.5524 9 15.0001 9C14.4478 9 14.0001 8.55228 14.0001 8L14.0001 3.41421L6.70718 10.7071L5.29297 9.29289L12.5859 2L8.00008 2C7.44779 2 7.00008 1.55228 7.00008 0.999999C7.00008 0.447714 7.44779 -6.78815e-07 8.00008 -1.01599e-06Z" fill={props.background || '#438BE9'}/>
    </svg>
  )
}
