import { describe, expect, it } from 'vitest'
import { removeDuplicates } from '.'

describe('removeDuplicates', () => {
  it('should remove duplicates', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual(2)
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5)
    expect(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(10)
  })
})
