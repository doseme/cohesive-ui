import React from 'react'

const CloseModal: React.FC = () => {
  return (
    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="X-close/close-modal-icon">
        <g id="X close icon" filter="url(#filter0_d)">
          <path id="Rectangle Copy 4" fillRule="evenodd" clipRule="evenodd" d="M5.30499 24.7505L24.7504 5.30502L26.695 7.24957L7.24954 26.695L5.30499 24.7505Z" fill="white" />
          <path id="Rectangle Copy 5" fillRule="evenodd" clipRule="evenodd" d="M7.24951 5.30502L26.6949 24.7505L24.7504 26.695L5.30497 7.24957L7.24951 5.30502Z" fill="white" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d" x="1.30499" y="2.30502" width="31.39" height="31.39" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
          <feOffset dx="1" dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0 0.12549 0 0 0 0.3 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export {
  CloseModal
}
