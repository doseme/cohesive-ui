import React from 'react'

const SearchInactive: React.FC = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Search/search-active">
        <g id="Search/search-inactive">
          <rect id="Rectangle" x="15.6402" y="14.3672" width="7" height="1" rx="0.5" transform="rotate(40 15.6402 14.3672)" stroke="#444444" />
          <path id="Oval" d="M17 11C17 14.3137 14.3137 17 11 17C7.68629 17 5 14.3137 5 11C5 7.68629 7.68629 5 11 5C14.3137 5 17 7.68629 17 11Z" stroke="#444444" strokeWidth="2" />
        </g>
      </g>
    </svg>
  )
}

export {
  SearchInactive
}