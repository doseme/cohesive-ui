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

  const firstButton: JSX.Element = (
    <Button
      variant='light'
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
      variant='light'
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
      variant='light'
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
      variant='light'
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

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) {
      return
    }

    onPageChange(pageNumber)
  }

  const pageNumberButton = (pageNumber: number, isCurrentPage: boolean): JSX.Element => {
    return (
      <Button
        variant={isCurrentPage ? 'info' : 'light'}
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
          nodes.push(firstButton)
          return nodes
        case 'previous':
          nodes.push(prevButton)
          return nodes
        case 'next':
          nodes.push(nextButton)
          return nodes
        case 'gotoLast':
          nodes.push(lastButton)
          return nodes
      }
    }

    if (n.type === 'dots') {
      nodes.push(<span className='ml-1'>{n.value}</span>)
      return nodes
    }

    if (n.type === 'pageNumber') {
      nodes.push(pageNumberButton(n.value, n.isCurrentPage))
      return nodes
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
