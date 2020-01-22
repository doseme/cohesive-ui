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
  
  const activeButtonClassName = 'secondary'
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

  const renderedNodes: JSX.Element[] = currentNodes.reduce<JSX.Element[]>((nodes, n) => {
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
      return nodes.concat(<span key={`dots-${(Math.random() * 10000000).toFixed(0)}`} className='ml-1'>{n.value}</span>)
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
