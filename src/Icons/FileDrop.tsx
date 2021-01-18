import React from 'react'

import { IconProps } from '.'

const FileDrop: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="16" height="14" rx="1" fill="white" stroke="#438BE9" stroke-width="2"/>
      <rect x="5" y="2" width="8" height="14" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50011 9.08579L8.2929 4.29289C8.68343 3.90237 9.31659 3.90237 9.70712 4.2929L14.4999 9.08579C14.8904 9.47631 14.8904 10.1095 14.4999 10.5C14.1094 10.8905 13.4762 10.8905 13.0857 10.5L10 7.41422L10 20L8.00001 20L8.00001 7.41422L4.91432 10.5C4.5238 10.8905 3.89063 10.8905 3.50011 10.5C3.10958 10.1095 3.10958 9.47631 3.50011 9.08579Z" fill="#438BE9"/>
    </svg>

  )
}

export {
  FileDrop
}
