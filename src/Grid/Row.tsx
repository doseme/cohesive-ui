import React, { HTMLProps } from 'react'

interface IProps extends HTMLProps<HTMLDivElement> {
  className?: string
}

const Row: React.FC<IProps> = (props) => {
  const { className: _, ...rest } = props
  const className = props.className ? `${props.className} co-row` : 'co-row'
  return <div className={className} {...rest}>{props.children}</div>
}

export {
  Row
}
