import { describe, expect, it } from 'vitest'
import { majorityElement } from '.'

describe('majorityElement', () => {
  it('should return the majority element', () => {
    expect(majorityElement([3, 2, 3])).toBe(3)
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2)
    // expect(majorityElement([1, 1, 3, 3, 2, 2, 2])).toBe(2)
  })

  it('should return -1 if no majority element', () => {
    // expect(majorityElement([1, 2, 3, 4, 5])).toBe(-1)
    // expect(majorityElement([1, 2, 3, 4, 5, 6])).toBe(-1)
    // expect(majorityElement([1, 2, 3, 4, 5, 6, 7])).toBe(-1)
  })
})
