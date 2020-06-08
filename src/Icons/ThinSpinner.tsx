import React from 'react'
import { DOSEME_BLUE } from '../style/colors'

interface IProps {
  r?: number
  strokeDasharray?: string
  strokeWidth?: number
  stroke?: string
  width?: string
}

const ThinSpinner: React.FC<IProps> = (props) => {
  const r = props.r || 35
  const strokeDasharray = props.strokeDasharray || `${r * 4.75} ${r * 1.5}`
  const strokeWidth = props.strokeWidth || 2
  const stroke = props.stroke || DOSEME_BLUE
  const width = props.width || '84px' // default to square

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      href="http://www.w3.org/1999/xlink"
      style={{ margin: 'auto', display: 'block' }}
      width={width}
      height={width}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid">
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={stroke}
        stroke-width={strokeWidth}
        r={r}
        stroke-dasharray={strokeDasharray}
        transform="rotate(37.5 50 50)"
      >
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.3" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    </svg>
  )
}

export {
  ThinSpinner
}