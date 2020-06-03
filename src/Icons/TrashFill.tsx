import React from 'react'

interface IProps {
  height?: number
  width?: number
}

const TrashFill: React.FC<IProps> = (props) => {
  return (
    <svg width={props.width || 24} height={props.height || 24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Trash/trash-hover-fill">
        <g id="Trash button :hover Copy">
          <g id="Trash/MASTER-trash-default">
            <path id="Oval" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#E81419" />
            <rect id="Rectangle" x="7" y="7" width="10" height="2" fill="white" />
            <rect id="Rectangle_2" x="11" y="6" width="2" height="1" fill="white" />
            <path id="Rectangle_3" fill-rule="evenodd" clip-rule="evenodd" d="M8 9H16L14.9828 18H8.98941L8 9Z" fill="white" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export {
  TrashFill
}
