import {
  INavigationNode,
  IPageNumberNode,
  TNode
} from './types'

const previous: INavigationNode = {
  type: 'navigation',
  symbol: '<',
  action: 'previous'
}

const next: INavigationNode = {
  type: 'navigation',
  symbol: '>',
  action: 'next'
}

export const paginateDesktop = (
  currentPage: number,
  pageCount: number
) => {
  const makePageNumberNode = (value: number): IPageNumberNode => {
    return {
      type: 'pageNumber',
      value,
      isCurrentPage: value === currentPage
    }
  }

  // The total pages are less than 6 so no need to show '...'.
  // Just render all pages.
  if (pageCount <= 7) {
    const nodes: TNode[] = [previous]
    for (let i = 0; i < pageCount; i++) {
      nodes.push(makePageNumberNode(i + 1))
    }
    return [...nodes, next]
  }

  // current page is near the start
  if (currentPage < 3) {
    const nodes: TNode[] = [previous]
    nodes.push(makePageNumberNode(1))
    nodes.push(makePageNumberNode(2))
    nodes.push(makePageNumberNode(3))
    nodes.push({ type: 'dots', value: '...' })
    nodes.push(makePageNumberNode(pageCount - 2))
    nodes.push(makePageNumberNode(pageCount - 1))
    nodes.push(makePageNumberNode(pageCount))
    return [...nodes, next]
  }

  // current page is near the end
  if (currentPage > pageCount - 5) {
    const nodes: TNode[] = [previous]
    nodes.push(makePageNumberNode(1))
    nodes.push({ type: 'dots', value: '...' })
    nodes.push(makePageNumberNode(pageCount - 4))
    nodes.push(makePageNumberNode(pageCount - 3))
    nodes.push(makePageNumberNode(pageCount - 2))
    nodes.push(makePageNumberNode(pageCount - 1))
    nodes.push(makePageNumberNode(pageCount))
    return [...nodes, next]
  }

  // current page is 'in the middle', eg not near the start or end!!
  const nodes: TNode[] = [previous]
  nodes.push(makePageNumberNode(1))
  nodes.push({ type: 'dots', value: '...' })
  nodes.push(makePageNumberNode(currentPage - 1))
  nodes.push(makePageNumberNode(currentPage))
  nodes.push(makePageNumberNode(currentPage + 1))
  nodes.push({ type: 'dots', value: '...' })
  nodes.push(makePageNumberNode(pageCount))
  return [...nodes, next]
}

export const paginateMobile = (
  currentPage: number,
  pageCount: number
) => {
  const makePageNumberNode = (value: number): IPageNumberNode => {
    return {
      type: 'pageNumber',
      value,
      isCurrentPage: value === currentPage
    }
  }

  // The total pages are less than 6 so no need to show '...'.
  // Just render all pages.
  if (pageCount <= 5) {
    const nodes: TNode[] = [previous]
    for (let i = 0; i < pageCount; i++) {
      nodes.push(makePageNumberNode(i + 1))
    }
    return [...nodes, next]
  }

  // current page is near the start
  if (currentPage <= 2) {
    const nodes: TNode[] = [previous]
    nodes.push(makePageNumberNode(1))
    nodes.push(makePageNumberNode(2))
    nodes.push(makePageNumberNode(3))
    nodes.push(makePageNumberNode(4))
    nodes.push(makePageNumberNode(5))
    return [...nodes, next]
  }

  // current page is near the end
  if (currentPage > pageCount - 2) {
    const nodes: TNode[] = [previous]
    nodes.push(makePageNumberNode(pageCount - 4))
    nodes.push(makePageNumberNode(pageCount - 3))
    nodes.push(makePageNumberNode(pageCount - 2))
    nodes.push(makePageNumberNode(pageCount - 1))
    nodes.push(makePageNumberNode(pageCount))
    return [...nodes, next]
  }

  // current page is 'in the middle', eg not near the start or end!!
  const nodes: TNode[] = [previous]
  nodes.push(makePageNumberNode(currentPage - 2))
  nodes.push(makePageNumberNode(currentPage - 1))
  nodes.push(makePageNumberNode(currentPage))
  nodes.push(makePageNumberNode(currentPage + 1))
  nodes.push(makePageNumberNode(currentPage + 2))
  return [...nodes, next]
}
