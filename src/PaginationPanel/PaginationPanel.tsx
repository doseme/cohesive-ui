import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { isNeighbour, isInStartEdge, isInEndEdge, bordersStartEdge, bordersEndEdge } from './utils'

interface IProps {
  itemIds: string[]
  perPage?: number
  handleUpdate: (ids: string[]) => void
  edgesToShow?: number
  neighboursToShow?: number
}

const PaginationPanel: React.FC<IProps> = ({
  edgesToShow = 2,
  neighboursToShow = 1,
  perPage = 5,
  itemIds,
  handleUpdate,
  children
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const currentIds = itemIds.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  )

  const totalPages = Math.ceil(itemIds.length / perPage)

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

    setCurrentPage(pageNumber)
  }

  const pageNumberButton = (pageNumber: number): JSX.Element | null => {
    if (
      isNeighbour(pageNumber, currentPage, neighboursToShow)
        || isInStartEdge(pageNumber, 1, edgesToShow)
        || isInEndEdge(pageNumber, totalPages, edgesToShow)
    ) {
      return (
        <Button
          variant={pageNumber === currentPage ? 'info' : 'light'}
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

    if ((bordersStartEdge(pageNumber, 1, edgesToShow)
        && !isInEndEdge(currentPage - 1, totalPages, edgesToShow))
      || (bordersEndEdge(pageNumber, totalPages, edgesToShow))
        && !isInStartEdge(currentPage + 1, 1, edgesToShow)) {
      return (<span className='ml-1' key={`page-spread-${pageNumber}`}>...</span>)
    }

    return null
  }

  const pageNumbers = totalPages > 0
    ? Array.from(Array(totalPages + 1).keys()).slice(1).map(pageNumberButton)
    : pageNumberButton(1)

  useEffect(() => {
    handleUpdate(currentIds)
  }, [])

  return (
    <>
      {children}

      <div className='d-flex justify-content-start w-100 pagination pt-1'>
        {firstButton}
        {prevButton}
        {pageNumbers}
        {nextButton}
        {lastButton}
      </div>
    </>
  )
}

export {
  PaginationPanel
}
