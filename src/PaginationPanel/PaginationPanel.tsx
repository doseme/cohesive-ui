import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { paginate } from './utils'
import { TNode } from './types'

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
  
  const activeButtonClassName = 'info'
  const inactiveButtonClassName = 'primary'

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return
    }

    onPageChange(pageNumber)
  }

  const firstButton: JSX.Element = (
    <Button
      variant={inactiveButtonClassName}
      data-testid='firstButton'
      key='firstButton'
      size='sm'
      onClick={() => {
        goToPage(1)
      }}
      disabled={currentPage <= 1}
    >
      <FontAwesomeIcon
        icon={faAngleDoubleLeft}
      />
    </Button>
  )

  const prevButton: JSX.Element = (
    <Button
      variant={inactiveButtonClassName}
      data-testid='prevButton'
      key='prevButton'
      size='sm'
      className='ml-1'
      onClick={() => {
        goToPage(currentPage - 1)
      }}
      disabled={currentPage <= 1}
    >
      <FontAwesomeIcon
        icon={faAngleLeft}
      />
    </Button>
  )

  const nextButton: JSX.Element = (
    <Button
      variant={inactiveButtonClassName}
      data-testid='nextButton'
      key='nextButton'
      size='sm'
      className='ml-1'
      onClick={() => {
        goToPage(currentPage + 1)
      }}
      disabled={currentPage >= totalPages}
    >
      <FontAwesomeIcon
        icon={faAngleRight}
      />
    </Button>
  )

  const lastButton: JSX.Element = (
    <Button
      variant={inactiveButtonClassName}
      data-testid='lastButton'
      key='lastButton'
      size='sm'
      className='ml-1'
      onClick={() => {
        goToPage(totalPages)
      }}
      disabled={currentPage >= totalPages}
    >
      <FontAwesomeIcon
        icon={faAngleDoubleRight}
      />
    </Button>
  )

  const pageNumberButton = (pageNumber: number, isCurrentPage: boolean): JSX.Element => {
    return (
      <Button
        variant={isCurrentPage ? activeButtonClassName : inactiveButtonClassName}
        data-testid={`page-button-${pageNumber}`}
        size='sm'
        className='ml-1'
        onClick={() => {
          goToPage(pageNumber)
        }}
        key={`page-button-${pageNumber}`}
        disabled={totalPages === 0}
      >
        {pageNumber}
      </Button>
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
      return nodes.concat(<span key={ind} className='ml-1'>{n.value}</span>)
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
