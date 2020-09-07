import React from 'react'

interface ICheckmarkProps {
  fill?: string
}

export const Checkmark: React.FC<ICheckmarkProps> = (props) => {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path fillRule='evenodd' clipRule='evenodd' d='M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z' fill={props.fill || '#59B662'} />
      <path fillRule='evenodd' clipRule='evenodd' d='M7.47749 11.3256L7.3113 11.5168L3.53846 8.23714L4.45617 7.18142L7.17644 9.54612L11.3463 4.74928L12.3995 5.66487L7.47818 11.3262L7.47749 11.3256Z' fill='white' />
    </svg>
  )
}
