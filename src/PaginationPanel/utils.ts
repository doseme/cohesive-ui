import inRange from 'lodash/inRange'

const isNeighbour = (page: number, center: number, neighbours: number): boolean => {
  return inRange(page, center - neighbours, center + neighbours + 1)
}

const isInStartEdge = (page: number, start: number, fromEdge: number): boolean => {
  return page < start + fromEdge
}

const isInEndEdge = (page: number, end: number, fromEdge: number): boolean => {
  return page > end - fromEdge
}

const bordersStartEdge = (page: number, start: number, fromEdge: number): boolean => {
  return page === start + fromEdge
}

const bordersEndEdge = (page: number, end: number, fromEdge: number): boolean => {
  return page === end - fromEdge
}

export {
  isNeighbour,
  isInStartEdge,
  isInEndEdge,
  bordersStartEdge,
  bordersEndEdge
}
