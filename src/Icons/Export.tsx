import React from 'react'

import { IconProps } from './'

const Export: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="path-1-inside-1" fill="white">
        <path className='is-outline' fill-rule="evenodd" clip-rule="evenodd" d="M0 17L14 17V12H12V14L2 14L2 12H0V17Z"/>
      </mask>
      <path className='is-outline' fill-rule="evenodd" clip-rule="evenodd" d="M0 17L14 17V12H12V14L2 14L2 12H0V17Z" fill={props.background || "#AEAEAE"}/>
      <path className='is-outline' d="M14 17V19H16V17H14ZM0 17H-2V19H-2.04359e-07L0 17ZM14 12H16V10H14V12ZM12 12V10H10V12H12ZM12 14V16H14V14H12ZM2 14L0 14L-2.38419e-07 16L2 16L2 14ZM2 12L4 12L4 10H2V12ZM0 12V10H-2V12H0ZM14 15L2.04359e-07 15L-2.04359e-07 19L14 19V15ZM12 12V17H16V12H12ZM12 14H14V10H12V14ZM10 12V14H14V12H10ZM12 12L2 12L2 16L12 16V12ZM4 14V12L2.38419e-07 12L0 14L4 14ZM0 14H2V10H0V14ZM2 17V12H-2V17H2Z" fill={props.background || "#AEAEAE"} mask="url(#path-1-inside-1)"/>
      <path className='is-outline' d="M7.89999 11.05L7.94999 11.05L7.94999 11L7.94999 3.2935L11.4646 6.80815C11.8356 7.17915 12.4371 7.17915 12.8081 6.80815C13.1791 6.43715 13.1791 5.83564 12.8081 5.46465L7.67174 0.328248C7.30074 -0.042749 6.69924 -0.042749 6.32824 0.328248L1.19187 5.46465C0.820874 5.83564 0.820874 6.43715 1.19187 6.80815C1.56287 7.17915 2.16438 7.17915 2.53537 6.80815L6.04999 3.2935L6.04999 11L6.04999 11.05L6.09999 11.05L7.89999 11.05Z" fill={props.background || "#AEAEAE"} stroke={props.background || "#AEAEAE"} stroke-width="0.1"/>
    </svg>
  )
}

export {
  Export
}
