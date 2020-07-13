import React from 'react'

const Archive: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg {...props} width="14" height="14" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14" height="3" fill="#AEAEAE" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 4H13V13H1V4Z" fill="#AEAEAE" />
      <rect x="5" y="6" width="4" height="2" fill="white" />
    </svg>
  )
}

export {
  Archive
}

