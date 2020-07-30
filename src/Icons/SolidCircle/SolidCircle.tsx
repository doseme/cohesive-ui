import React from 'react'

interface IProps {
  stroke?: string
}

export const SolidCircle: React.FC<IProps> = (props) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='6' cy='6' r='6' fill={props.stroke} />
    </svg>
  )
}
