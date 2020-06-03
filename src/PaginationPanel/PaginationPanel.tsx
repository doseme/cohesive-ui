import React from 'react'
import { Button } from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { paginate } from './utils'
import { TNode } from './types'
import './index.scss'

interface IProps {
  currentPage: number
  totalPages: number
  onPageChange: (pageNumber: number) => void
}

const PaginationPanel: React.FC<IProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const currentNodes: TNode[] = paginate(currentPage, totalPages)
  
  const activeButtonClassName = 'co-pagination-btn co-pagination-active'
  const inactiveButtonClassName = 'co-pagination-btn co-pagination-inactive'

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return
    }

    onPageChange(pageNumber)
  }

  const firstButton: JSX.Element = (
    <button
      className={inactiveButtonClassName}
      data-testid='firstButton'
      key='firstButton'
      onClick={() => {
        goToPage(1)
      }}
      disabled={currentPage <= 1}
    >
      <FontAwesomeIcon
        icon={faAngleDoubleLeft}
      />
    </button>
  )

  const prevButton: JSX.Element = (
    <button
      data-testid='prevButton'
      key='prevButton'
      className={inactiveButtonClassName}
      onClick={() => {
        goToPage(currentPage - 1)
      }}
      disabled={currentPage <= 1}
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
        goToPage(currentPage + 1)
      }}
      disabled={currentPage >= totalPages}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
      />
    </button>
  )

  const lastButton: JSX.Element = (
    <button
      className={inactiveButtonClassName}
      data-testid='lastButton'
      key='lastButton'
      onClick={() => {
        goToPage(totalPages)
      }}
      disabled={currentPage >= totalPages}
    >
      <FontAwesomeIcon
        icon={faAngleDoubleRight}
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
        disabled={totalPages === 0}
      >
        {pageNumber}
      </button>
    )
  }

  const renderedNodes = currentNodes.reduce<JSX.Element[]>((nodes, n, ind) => {
    if (n.type === 'navigation') {
      switch(n.action) {
        case 'gotoFirst':
          return nodes.concat(firstButton)
        case 'previous':
          return nodes.concat(prevButton)
        case 'next':
          return nodes.concat(nextButton)
        case 'gotoLast':
          return nodes.concat(lastButton)
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
    <div className='d-flex justify-content-start w-100 pagination pt-1'>
      {renderedNodes}
    </div>
  )
}

export {
  PaginationPanel
}
