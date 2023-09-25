import { describe, expect, it } from 'vitest'
import { findDisappearedNumbers } from '.'

describe('findDisappearedNumbers', () => {
  it('should work', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
    expect(findDisappearedNumbers([1, 1])).toEqual([2])
    expect(findDisappearedNumbers([1, 1, 2])).toEqual([3])
  },
  )
})
