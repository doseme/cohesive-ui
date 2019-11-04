import React from 'react'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDoubleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import { isNeighbour, isInStartEdge, isInEndEdge, bordersStartEdge, bordersEndEdge } from './utils'

interface IProps {
  itemIds: string[]
  perPage: number
  handleUpdate: (ids: string[]) => void
  edgesToShow: number
  neighboursToShow: number
}

interface IState {
  currentPage: number
}

class PaginationPanel extends React.PureComponent<IProps, IState> {
  static defaultProps = {
    edgesToShow: 2,
    neighboursToShow: 1,
    perPage: 5
  }

  state = {
    currentPage: 1
  }

  public componentDidMount() {
    this.props.handleUpdate(this.currentIds)
  }

  public componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevState.currentPage != this.state.currentPage) {
      this.props.handleUpdate(this.currentIds)
    }
  }

  private get currentIds(): string[] {
    const {
      itemIds,
      perPage
    } = this.props

    const { currentPage } = this.state

    return itemIds.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    )
  }

  private get totalPages(): number {
    return Math.ceil(this.props.itemIds.length / this.props.perPage)
  }

  private get firstButton(): JSX.Element {
    return (
      <Button
        variant='light'
        size='sm'
        onClick={() => {
          this.goToPage(1)
        }}
        disabled={this.state.currentPage <= 1}
      >
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
        />
      </Button>
    )
  }

  private get prevButton(): JSX.Element {
    return (
      <Button
        variant='light'
        size='sm'
        className='ml-1'
        onClick={() => {
          this.goToPage(this.state.currentPage - 1)
        }}
        disabled={this.state.currentPage <= 1}
      >
        <FontAwesomeIcon
          icon={faAngleLeft}
        />
      </Button>
    )
  }

  private get nextButton(): JSX.Element {
    return (
      <Button
        variant='light'
        size='sm'
        className='ml-1'
        onClick={() => {
          this.goToPage(this.state.currentPage + 1)
        }}
        disabled={this.state.currentPage >= this.totalPages}
      >
        <FontAwesomeIcon
          icon={faAngleRight}
        />
      </Button>
    )
  }

  private get lastButton(): JSX.Element {
    return (
      <Button
        variant='light'
        size='sm'
        className='ml-1'
        onClick={() => {
          this.goToPage(this.totalPages)
        }}
        disabled={this.state.currentPage >= this.totalPages}
      >
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
        />
      </Button>
    )
  }

  private goToPage = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > this.totalPages) {
      return
    }

    this.setState({
      currentPage: pageNumber
    })
  }

  private pageNumberButton = (pageNumber: number): JSX.Element | null => {
    const { neighboursToShow, edgesToShow } = this.props
    const { currentPage } = this.state

    if (
      isNeighbour(pageNumber, currentPage, neighboursToShow)
        || isInStartEdge(pageNumber, 1, edgesToShow)
        || isInEndEdge(pageNumber, this.totalPages, edgesToShow)
    ) {
      return (
        <Button
          variant={pageNumber === this.state.currentPage ? 'info' : 'light'}
          size='sm'
          className='ml-1'
          onClick={() => {
            this.goToPage(pageNumber)
          }}
          key={`page-button-${pageNumber}`}
          disabled={this.totalPages === 0}
        >
          {pageNumber}
        </Button>
      )
    }

    if ((bordersStartEdge(pageNumber, 1, edgesToShow)
        && !isInEndEdge(currentPage - 1, this.totalPages, edgesToShow))
      || (bordersEndEdge(pageNumber, this.totalPages, edgesToShow))
        && !isInStartEdge(currentPage + 1, 1, edgesToShow)) {
      return (<span className='ml-1' key={`page-spread-${pageNumber}`}>...</span>)
    }

    return null
  }

  private get pageNumbers() {
    const pageNumbers: number[] = Array.from(Array(this.totalPages + 1).keys()).slice(1)

    if (this.totalPages > 0) {
      return pageNumbers.map(this.pageNumberButton)
    }

    return this.pageNumberButton(1)
  }

  public render(): JSX.Element {
    return (
      <>
        {this.props.children}

        <div className='d-flex justify-content-start w-100 pagination pt-1'>
          {this.firstButton}
          {this.prevButton}
          {this.pageNumbers}
          {this.nextButton}
          {this.lastButton}
        </div>
      </>
    )
  }
}

export {
  PaginationPanel
}
