import React from 'react'

import { IconProps } from './'

const FileDropHover: React.FC<IconProps & React.HTMLAttributes<HTMLOrSVGElement>> = (props) => {
  return (
    <svg width="32" height="32" viewBox="6 3 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 35C30.8366 35 38 27.8366 38 19C38 10.1634 30.8366 3 22 3C13.1634 3 6 10.1634 6 19C6 27.8366 13.1634 35 22 35Z" fill="#438BE9" />
      </g>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M26 24L26 26L29 26C30.1046 26 31 25.1046 31 24L31 12C31 10.8954 30.1046 10 29 10L15 10C13.8954 10 13 10.8954 13 12L13 24C13 25.1046 13.8954 26 15 26L18 26L18 24L15 24L15 12L29 12L29 24L26 24Z" fill="white" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5001 19.0858L21.2929 14.2929C21.6834 13.9024 22.3166 13.9024 22.7071 14.2929L27.4999 19.0858C27.8904 19.4763 27.8904 20.1095 27.4999 20.5C27.1094 20.8905 26.4762 20.8905 26.0857 20.5L23 17.4142L23 30L21 30L21 17.4142L17.9143 20.5C17.5238 20.8905 16.8906 20.8905 16.5001 20.5C16.1096 20.1095 16.1096 19.4763 16.5001 19.0858Z" fill="white" />
      <defs>
        <filter id="filter0_d" x="0" y="0" width="44" height="44" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feColorMatrix type="matrix" values="0 0 0 0 0.070625 0 0 0 0 0.196259 0 0 0 0 0.470833 0 0 0 0.12 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>

  )
}

export {
  FileDropHover
}
