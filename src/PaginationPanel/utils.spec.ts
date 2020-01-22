import { paginate } from './utils'

test('shows all pages when less than 5 pages', () => {
  // Show all pages, and navigation buttons regardless of current page
  // << | < | 1 | 2 | 3 | 4 | 5 | > | >>
  const actual = paginate(1, 5)

  expect([actual[0], actual[1]]).toEqual([
    { type: 'navigation', symbol: '<<', action: 'gotoFirst' },
    { type: 'navigation', symbol: '<', action: 'previous' }
  ])
  expect([actual[2], actual[3], actual[4], actual[5], actual[6]]).toEqual([
    { type: 'pageNumber', value: 1, isCurrentPage: true },
    { type: 'pageNumber', value: 2, isCurrentPage: false },
    { type: 'pageNumber', value: 3, isCurrentPage: false },
    { type: 'pageNumber', value: 4, isCurrentPage: false },
    { type: 'pageNumber', value: 5, isCurrentPage: false }
  ])
  expect([actual[7], actual[8]]).toEqual([
    { type: 'navigation', symbol: '>', action: 'next' },
    { type: 'navigation', symbol: '>>', action: 'gotoLast' }
  ])
})

test('shows all pages when exactly 7 pages', () => {
  // << | < | 1 | 2 | 3 | 4 | 5 | 6 | 7 | > | >>
  const actual = paginate(1, 7)

  expect([actual[0], actual[1]]).toEqual([
    { type: 'navigation', symbol: '<<', action: 'gotoFirst' },
    { type: 'navigation', symbol: '<', action: 'previous' }
  ])

  expect(actual[2]).toEqual({
    type: 'pageNumber',
    value: 1,
    isCurrentPage: true
  })
  expect(actual[3]).toEqual({
    type: 'pageNumber',
    value: 2,
    isCurrentPage: false
  })
  expect(actual[4]).toEqual({
    type: 'pageNumber',
    value: 3,
    isCurrentPage: false
  })
  expect(actual[5]).toEqual({
    type: 'pageNumber',
    value: 4,
    isCurrentPage: false
  })
  expect(actual[6]).toEqual({
    type: 'pageNumber',
    value: 5,
    isCurrentPage: false
  })
  expect(actual[7]).toEqual({
    type: 'pageNumber',
    value: 6,
    isCurrentPage: false
  })
  expect(actual[8]).toEqual({
    type: 'pageNumber',
    value: 7,
    isCurrentPage: false
  })

  expect([actual[9], actual[10]]).toEqual([
    { type: 'navigation', symbol: '>', action: 'next' },
    { type: 'navigation', symbol: '>>', action: 'gotoLast' }
  ])
})

test('more than 7 pages, current page is first page', () => {
  const actual = paginate(1, 100)

  // Current page is 1
  // << | < | 1 | 2 | 3 | ... | 98 | 99 | 100 | > | >>
  expect([actual[0], actual[1]]).toEqual([
    { type: 'navigation', symbol: '<<', action: 'gotoFirst' },
    { type: 'navigation', symbol: '<', action: 'previous' }
  ])

  expect([actual[2], actual[3], actual[4]]).toEqual([
    { type: 'pageNumber', value: 1, isCurrentPage: true },
    { type: 'pageNumber', value: 2, isCurrentPage: false },
    { type: 'pageNumber', value: 3, isCurrentPage: false }
  ])

  expect([actual[5]]).toEqual([{ type: 'dots', value: '...' }])

  expect([actual[6], actual[7], actual[8]]).toEqual([
    { type: 'pageNumber', value: 98, isCurrentPage: false },
    { type: 'pageNumber', value: 99, isCurrentPage: false },
    { type: 'pageNumber', value: 100, isCurrentPage: false }
  ])

  expect([actual[9], actual[10]]).toEqual([
    { type: 'navigation', symbol: '>', action: 'next' },
    { type: 'navigation', symbol: '>>', action: 'gotoLast' }
  ])
})

test('more than 7 pages, current page is in the middle', () => {
  const actual = paginate(50, 100)

  // Current page is 50
  // << | < | 1 | ... | 49 | 50 | 51 | ... | 100 | > | >>

  expect([actual[0], actual[1]]).toEqual([
    { type: 'navigation', symbol: '<<', action: 'gotoFirst' },
    { type: 'navigation', symbol: '<', action: 'previous' }
  ])

  expect(actual[2]).toEqual({
    type: 'pageNumber',
    value: 1,
    isCurrentPage: false
  })

  expect(actual[3]).toEqual({ type: 'dots', value: '...' })

  expect([actual[4], actual[5], actual[6]]).toEqual([
    { type: 'pageNumber', value: 49, isCurrentPage: false },
    { type: 'pageNumber', value: 50, isCurrentPage: true },
    { type: 'pageNumber', value: 51, isCurrentPage: false }
  ])

  expect(actual[7]).toEqual({ type: 'dots', value: '...' })

  expect(actual[8]).toEqual({
    type: 'pageNumber',
    value: 100,
    isCurrentPage: false
  })

  expect([actual[9], actual[10]]).toEqual([
    { type: 'navigation', symbol: '>', action: 'next' },
    { type: 'navigation', symbol: '>>', action: 'gotoLast' }
  ])
})

it('more than 7 pages, current page is at the end', () => {
  const actual = paginate(97, 100)

  // Current page is 97
  // << | < | 1 | ... | 96 | 97 | 98 | 99 | 100 | > | >>
  expect([actual[0], actual[1]]).toEqual([
    { type: 'navigation', symbol: '<<', action: 'gotoFirst' },
    { type: 'navigation', symbol: '<', action: 'previous' }
  ])

  expect(actual[2]).toEqual({
    type: 'pageNumber',
    value: 1,
    isCurrentPage: false
  })

  expect(actual[3]).toEqual({ type: 'dots', value: '...' })

  expect([actual[4], actual[5], actual[6], actual[7], actual[8]]).toEqual([
    { type: 'pageNumber', value: 96, isCurrentPage: false },
    { type: 'pageNumber', value: 97, isCurrentPage: true },
    { type: 'pageNumber', value: 98, isCurrentPage: false },
    { type: 'pageNumber', value: 99, isCurrentPage: false },
    { type: 'pageNumber', value: 100, isCurrentPage: false }
  ])

  expect([actual[9], actual[10]]).toEqual([
    { type: 'navigation', symbol: '>', action: 'next' },
    { type: 'navigation', symbol: '>>', action: 'gotoLast' }
  ])
})
