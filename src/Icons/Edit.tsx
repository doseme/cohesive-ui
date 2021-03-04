import React from 'react'
import { IconProps } from './'

const Edit: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg {...props} width={props.width?.toString() || '15'} height={props.height?.toString() || '22'} viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='is-outline' fillRule="evenodd" clipRule="evenodd" d="M8.39868 14.5534L4.93458 12.5534L3.14984 18.8692C3.03698 19.2686 3.53198 19.5544 3.82143 19.2569L8.39868 14.5534Z" fill="#AEAEAE" />
      <path className='is-outline' fillRule="evenodd" clipRule="evenodd" d="M14.732 3.58377C15.2843 2.62718 14.9565 1.404 14 0.851718C13.0434 0.299433 11.8202 0.627185 11.2679 1.58377L11.0207 2.01197L14.4848 4.01197L14.732 3.58377ZM13.8181 5.16668L10.354 3.16668L4.93457 12.5534L8.39867 14.5534L13.8181 5.16668Z" fill="#AEAEAE" />
    </svg>
  )
}

export {
  Edit
}

