import { describe, expect, it } from 'vitest'
import { singleNumber } from '.'

describe('singleNumber', () => {
  it('should return the only number that appears only once in the array', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
    expect(singleNumber([1])).toBe(1)
    expect(singleNumber([1, 2, 1, 3, 2, 5, 5])).toBe(3)
    expect(singleNumber([1, 2, 1, 3, 2, 5, 3])).toBe(5)
  })
})
