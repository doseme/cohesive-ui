import React from 'react'

interface IProps {
  stroke?: string
}

const Schedule: React.FC<IProps> = (props) => {
  return (
    <svg width='11' height='11' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect x='1' y='1' width='9' height='9' stroke={props.stroke} strokeWidth='2' />
      <line x1='4' y1='4' x2='7' y2='4' stroke={props.stroke} strokeWidth='2' />
    </svg>
  )
}

export {
  Schedule
}