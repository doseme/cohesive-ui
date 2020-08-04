import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { paginateDesktop, paginateMobile } from './utils'
import { TNode } from './types'
import './index.scss'

interface IProps {
  currentPage: number
  totalPages: number
  isMobile?: boolean
  onPageChange: (pageNumber: number) => void
}

const PaginationPanel: React.FC<IProps> = (props) => {
  const currentNodes: TNode[] = props.isMobile 
    ? paginateMobile(props.currentPage, props.totalPages)
    : paginateDesktop(props.currentPage, props.totalPages)
  
  const activeButtonClassName = 'co-pagination-btn co-pagination-active'
  const inactiveButtonClassName = 'co-pagination-btn co-pagination-inactive'

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > props.totalPages) {
      return
    }

    props.onPageChange(pageNumber)
  }

  const prevButton: JSX.Element = (
    <button
      data-testid='prevButton'
      key='prevButton'
      className={inactiveButtonClassName}
      onClick={() => {
        goToPage(props.currentPage - 1)
      }}
      disabled={props.currentPage <= 1}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
      />
    </button>
  )

  const nextButton: JSX.Element = (
    <button
      className={inactiveButtonClassName}
      data-testid='nextButton'
      key='nextButton'
      onClick={() => {
        goToPage(props.currentPage + 1)
      }}
      disabled={props.currentPage >= props.totalPages}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
      />
    </button>
  )

  const pageNumberButton = (pageNumber: number, isCurrentPage: boolean): JSX.Element => {
    return (
      <button
        className={isCurrentPage ? activeButtonClassName : inactiveButtonClassName}
        data-testid={`page-button-${pageNumber}`}
        onClick={() => {
          goToPage(pageNumber)
        }}
        key={`page-button-${pageNumber}`}
        disabled={props.totalPages === 0}
      >
        {pageNumber}
      </button>
    )
  }

  const renderedNodes = currentNodes.reduce<JSX.Element[]>((nodes, n, ind) => {
    if (n.type === 'navigation') {
      switch(n.action) {
        case 'previous':
          return nodes.concat(prevButton)
        case 'next':
          return nodes.concat(nextButton)
      }
    }

    if (n.type === 'dots') {
      return nodes.concat(<span key={ind} className='ml-1 co-dots'>{n.value}</span>)
    }

    if (n.type === 'pageNumber') {
      return nodes.concat(pageNumberButton(n.value, n.isCurrentPage))
    }

    return nodes
  }, [])

  return (
    <div className='d-flex pagination pt-1'>
      {renderedNodes}
    </div>
  )
}

export {
  PaginationPanel
}
