import React from 'react'

const ThinSpinner: React.FC = () => {
  return (
    // @ts-ignore
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: '#fff', display: 'block'}} width="84px" height="84px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#09325f" stroke-width="4" r="35" stroke-dasharray="164.93361431346415 56.97787143782138" transform="rotate(37.5538 50 50)">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.333333333333333s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  )
}

export {
  ThinSpinner
}