import React from 'react'

import { IconProps } from '.'

const Success: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#59B662"/>
      <rect x="6.42493" y="10.4106" width="7.50139" height="1.39559" transform="rotate(-49 6.42493 10.4106)" fill="#FFFFFF"/>
      <rect x="4.45618" y="7.18164" width="4.99907" height="1.39883" transform="rotate(41 4.45618 7.18164)" fill="#FFFFFF"/>
    </svg>
  )
}

export {
  Success
}
