import React from 'react'

interface IProps {
  stroke?: string
}

const HollowCircle: React.FC<IProps> = (props) => {
  return (
    <svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='6' cy='6' r='5' stroke={props.stroke || 'white'} strokeWidth='2' />
    </svg>
  )
}

export {
  HollowCircle
}