import React from 'react'

interface IProps {
  width: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  className?: string
}

const Col: React.FC<IProps> = (props) => {
  const className = props.className 
    ? `${props.className} co-col-${props.width}` 
    : `co-col-${props.width}`

  return <div className={className}>{props.children}</div>
}

export {
  Col
}


