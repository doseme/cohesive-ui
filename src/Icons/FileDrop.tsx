import React from 'react'

import { IconProps } from './'

const FileDrop: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg width="32" height="32" viewBox="-7 -6 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 14L13 16L16 16C17.1046 16 18 15.1046 18 14L18 2C18 0.895434 17.1046 3.73642e-06 16 2.68618e-06L2 5.08584e-07C0.895429 4.12019e-07 -5.86865e-07 0.895431 -6.8343e-07 2L-3.63985e-06 14C-3.73642e-06 15.1046 0.895428 16 2 16L5 16L5 14L2 14L2 2L16 2L16 14L13 14Z" fill="#438BE9"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.50011 9.08579L8.2929 4.29289C8.68343 3.90237 9.31659 3.90237 9.70712 4.2929L14.4999 9.08579C14.8904 9.47631 14.8904 10.1095 14.4999 10.5C14.1094 10.8905 13.4762 10.8905 13.0857 10.5L10 7.41422L10 20L8.00001 20L8.00001 7.41422L4.91432 10.5C4.5238 10.8905 3.89063 10.8905 3.50011 10.5C3.10958 10.1095 3.10958 9.47631 3.50011 9.08579Z" fill="#438BE9"/>
    </svg>
  )
}

export {
  FileDrop
}
