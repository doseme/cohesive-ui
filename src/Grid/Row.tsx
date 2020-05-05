import React from 'react'

interface IProps {
  className?: string
}

const Row: React.FC<IProps> = (props) => {
  const className = props.className ? `${props.className} co-row` : 'co-row'
  return <div className={className}>{props.children}</div>
}

export {
  Row
}
