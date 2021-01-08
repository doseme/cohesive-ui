import { paginateDesktop, paginateMobile } from './utils'

describe('paginationDesktop', () => {
  test('shows all pages when less than 5 pages', () => {
    // Show all pages, and navigation buttons regardless of current page
    // < | 1 | 2 | 3 | 4 | 5 | > 
    const actual = paginateDesktop(1, 5)

    expect(actual[0]).toEqual(
      { type: 'navigation', symbol: '<', action: 'previous' }
    )
    expect([actual[1], actual[2], actual[3], actual[4], actual[5]]).toEqual([
      { type: 'pageNumber', value: 1, isCurrentPage: true },
      { type: 'pageNumber', value: 2, isCurrentPage: false },
      { type: 'pageNumber', value: 3, isCurrentPage: false },
      { type: 'pageNumber', value: 4, isCurrentPage: false },
      { type: 'pageNumber', value: 5, isCurrentPage: false }
    ])
    expect([actual[6]]).toEqual([
      { type: 'navigation', symbol: '>', action: 'next' },
    ])
  })

  test('shows all pages when exactly 7 pages', () => {
    // < | 1 | 2 | 3 | 4 | 5 | 6 | 7 | > 
    const actual = paginateDesktop(1, 7)

    expect([actual[0]]).toEqual([
      { type: 'navigation', symbol: '<', action: 'previous' }
    ])

    expect(actual[1]).toEqual({
      type: 'pageNumber',
      value: 1,
      isCurrentPage: true
    })
    expect(actual[2]).toEqual({
      type: 'pageNumber',
      value: 2,
      isCurrentPage: false
    })
    expect(actual[3]).toEqual({
      type: 'pageNumber',
      value: 3,
      isCurrentPage: false
    })
    expect(actual[4]).toEqual({
      type: 'pageNumber',
      value: 4,
      isCurrentPage: false
    })
    expect(actual[5]).toEqual({
      type: 'pageNumber',
      value: 5,
      isCurrentPage: false
    })
    expect(actual[6]).toEqual({
      type: 'pageNumber',
      value: 6,
      isCurrentPage: false
    })
    expect(actual[7]).toEqual({
      type: 'pageNumber',
      value: 7,
      isCurrentPage: false
    })

    expect([actual[8]]).toEqual([
      { type: 'navigation', symbol: '>', action: 'next' },
    ])
  })

  test('more than 7 pages, current page is first page', () => {
    const actual = paginateDesktop(1, 100)

    // Current page is 1
    // << | < | 1 | 2 | 3 | ... | 98 | 99 | 100 | > | >>
    expect([actual[0]]).toEqual([
      { type: 'navigation', symbol: '<', action: 'previous' }
    ])

    expect([actual[1], actual[2], actual[3]]).toEqual([
      { type: 'pageNumber', value: 1, isCurrentPage: true },
      { type: 'pageNumber', value: 2, isCurrentPage: false },
      { type: 'pageNumber', value: 3, isCurrentPage: false }
    ])

    expect([actual[4]]).toEqual([{ type: 'dots', value: '...' }])

    expect([actual[5], actual[6], actual[7]]).toEqual([
      { type: 'pageNumber', value: 98, isCurrentPage: false },
      { type: 'pageNumber', value: 99, isCurrentPage: false },
      { type: 'pageNumber', value: 100, isCurrentPage: false }
    ])

    expect([actual[8]]).toEqual([
      { type: 'navigation', symbol: '>', action: 'next' },
    ])
  })

  test('more than 7 pages, current page is in the middle', () => {
    const actual = paginateDesktop(50, 100)

    // Current page is 50
    // < | 1 | ... | 49 | 50 | 51 | ... | 100 | > 

    expect([actual[0]]).toEqual([
      { type: 'navigation', symbol: '<', action: 'previous' }
    ])

    expect(actual[1]).toEqual({
      type: 'pageNumber',
      value: 1,
      isCurrentPage: false
    })

    expect(actual[2]).toEqual({ type: 'dots', value: '...' })

    expect([actual[3], actual[4], actual[5]]).toEqual([
      { type: 'pageNumber', value: 49, isCurrentPage: false },
      { type: 'pageNumber', value: 50, isCurrentPage: true },
      { type: 'pageNumber', value: 51, isCurrentPage: false }
    ])

    expect(actual[6]).toEqual({ type: 'dots', value: '...' })

    expect(actual[7]).toEqual({
      type: 'pageNumber',
      value: 100,
      isCurrentPage: false
    })

    expect([actual[8]]).toEqual([
      { type: 'navigation', symbol: '>', action: 'next' },
    ])
  })

  it('more than 7 pages, current page is at the end', () => {
    const actual = paginateDesktop(97, 100)

    // Current page is 97
    // < | 1 | ... | 96 | 97 | 98 | 99 | 100 | >
    expect([actual[0]]).toEqual([
      { type: 'navigation', symbol: '<', action: 'previous' }
    ])

    expect(actual[1]).toEqual({
      type: 'pageNumber',
      value: 1,
      isCurrentPage: false
    })

    expect(actual[2]).toEqual({ type: 'dots', value: '...' })

    expect([actual[3], actual[4], actual[5], actual[6], actual[7]]).toEqual([
      { type: 'pageNumber', value: 96, isCurrentPage: false },
      { type: 'pageNumber', value: 97, isCurrentPage: true },
      { type: 'pageNumber', value: 98, isCurrentPage: false },
      { type: 'pageNumber', value: 99, isCurrentPage: false },
      { type: 'pageNumber', value: 100, isCurrentPage: false }
    ])

    expect([actual[8]]).toEqual([
      { type: 'navigation', symbol: '>', action: 'next' },
    ])
  })
})

describe('paginationMobile', () => {
  test('always show all pages if total pages is > 5', () => {
    // Show all pages, and navigation buttons regardless of current page
    // < | 1 | 2 | 3 | > 
    const actual = paginateMobile(1, 3)

    expect(actual[0]).toEqual(
      { type: 'navigation', symbol: '<', action: 'previous' }
    )
    expect([actual[1], actual[2], actual[3]]).toEqual([
      { type: 'pageNumber', value: 1, isCurrentPage: true },
      { type: 'pageNumber', value: 2, isCurrentPage: false },
      { type: 'pageNumber', value: 3, isCurrentPage: false },
    ])
    expect(actual[4]).toEqual(
      { type: 'navigation', symbol: '>', action: 'next' },
    )
  })

  test('always show 5 pages if total pages is 5', () => {
    // Show all pages, and navigation buttons regardless of current page
    // < | 1 | 2 | 3 | 4 | 5 | > 
    const actual = paginateMobile(1, 5)

    expect(actual[0]).toEqual(
      { type: 'navigation', symbol: '<', action: 'previous' }
    )
    expect([actual[1], actual[2], actual[3], actual[4], actual[5]]).toEqual([
      { type: 'pageNumber', value: 1, isCurrentPage: true },
      { type: 'pageNumber', value: 2, isCurrentPage: false },
      { type: 'pageNumber', value: 3, isCurrentPage: false },
      { type: 'pageNumber', value: 4, isCurrentPage: false },
      { type: 'pageNumber', value: 5, isCurrentPage: false }
    ])
    expect(actual[6]).toEqual(
      { type: 'navigation', symbol: '>', action: 'next' },
    )
  })

  test('always show current page in middle if current page not +-2 from the first/last page', () => {
    // Show all pages, and navigation buttons regardless of current page
    // < | 10 | 11 | 12 | 13 | 14 | > 
    const actual = paginateMobile(12, 20)

    expect(actual[0]).toEqual(
      { type: 'navigation', symbol: '<', action: 'previous' }
    )
    expect([actual[1], actual[2], actual[3], actual[4], actual[5]]).toEqual([
      { type: 'pageNumber', value: 10, isCurrentPage: false },
      { type: 'pageNumber', value: 11, isCurrentPage: false },
      { type: 'pageNumber', value: 12, isCurrentPage: true },
      { type: 'pageNumber', value: 13, isCurrentPage: false },
      { type: 'pageNumber', value: 14, isCurrentPage: false }
    ])
    expect(actual[6]).toEqual(
      { type: 'navigation', symbol: '>', action: 'next' },
    )
  })

  test('handles case where current page is +- 2 from the start/end', () => {
    // Eg: current page is 2
    // < | 1 | 2 | 3 | 4 | 5 | > 
    const actual = paginateMobile(2, 20)

    expect(actual[0]).toEqual(
      { type: 'navigation', symbol: '<', action: 'previous' }
    )
    expect([actual[1], actual[2], actual[3], actual[4], actual[5]]).toEqual([
      { type: 'pageNumber', value: 1, isCurrentPage: false },
      { type: 'pageNumber', value: 2, isCurrentPage: true },
      { type: 'pageNumber', value: 3, isCurrentPage: false },
      { type: 'pageNumber', value: 4, isCurrentPage: false },
      { type: 'pageNumber', value: 5, isCurrentPage: false }
    ])
    expect(actual[6]).toEqual(
      { type: 'navigation', symbol: '>', action: 'next' },
    )
  })
})
