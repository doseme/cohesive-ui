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

  const getCurrentIds = (): string[] => {
    return itemIds.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    )
  }

  const getTotalPages = (): number => {
    return Math.ceil(itemIds.length / perPage)
  }

  const getFirstButton = (): JSX.Element => {
    return (
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
  }

  const getPrevButton = (): JSX.Element => {
    return (
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
  }

  const getNextButton = (): JSX.Element => {
    return (
      <Button
        variant='light'
        size='sm'
        className='ml-1'
        onClick={() => {
          goToPage(currentPage + 1)
        }}
        disabled={currentPage >= getTotalPages()}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
        />
      </Button>
    )
  }

  const getLastButton = (): JSX.Element => {
    const totalPages = getTotalPages()
    return (
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
  }

  const goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > getTotalPages()) {
      return
    }

    setCurrentPage(pageNumber)
  }

  const pageNumberButton = (pageNumber: number): JSX.Element | null => {
    const totalPages = getTotalPages()

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

  const getPageNumbers = () => {
    const totalPages = getTotalPages()
    const pageNumbers: number[] = Array.from(Array(totalPages + 1).keys()).slice(1)

    if (totalPages > 0) {
      return pageNumbers.map(pageNumberButton)
    }

    return pageNumberButton(1)
  }

  // componentDidMount
  useEffect(() => {
    handleUpdate(getCurrentIds())
  }, [])

  // componentDidUpdate
  useEffect(() => {
    handleUpdate(getCurrentIds())
  }, [ currentPage ])

  return (
    <>
      {children}

      <div className='d-flex justify-content-start w-100 pagination pt-1'>
        {getFirstButton()}
        {getPrevButton()}
        {getPageNumbers()}
        {getNextButton()}
        {getLastButton()}
      </div>
    </>
  )
}

export {
  PaginationPanel
}
