import React from 'react'

import { IconProps } from './'

const Trash: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg {...props} width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.333008" y="1.33331" width="13.3333" height="2.66667" fill={props.background || "#AEAEAE"}/>
      <rect x="5.66699" width="2.66667" height="1.33333" fill={props.background || "#AEAEAE"} />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.66699 4H12.3337L10.9774 16H2.98621L1.66699 4Z" fill={props.background || "#AEAEAE"} />
    </svg>
  )
}

export {
  Trash
}
