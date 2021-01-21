import React from 'react'

import { IconProps } from './'

const Import: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1" fill="white">
        <path className='is-outline' fill-rule="evenodd" clip-rule="evenodd" d="M0 17L14 17V12H12V14L2 14L2 12H0V17Z"/>
      </mask>
      <path className='is-outline' fill-rule="evenodd" clip-rule="evenodd" d="M0 17L14 17V12H12V14L2 14L2 12H0V17Z" fill={props.background || "#AEAEAE"}/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7728 5.5L7.63634 10.6364C7.28487 10.9879 6.71502 10.9879 6.36355 10.6364L1.22717 5.5C0.875694 5.14853 0.875694 4.57868 1.22717 4.22721C1.57864 3.87574 2.14849 3.87574 2.49996 4.22721L6.09994 7.82721L6.09994 3.03201e-07L7.89994 2.24521e-07L7.89994 7.82721L11.5 4.22721C11.8515 3.87574 12.4213 3.87574 12.7728 4.22721C13.1242 4.57868 13.1242 5.14853 12.7728 5.5Z" fill={props.background || "#AEAEAE"} />
    </svg>

  )
}

export {
  Import
}
