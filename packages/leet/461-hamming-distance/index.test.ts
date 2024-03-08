import { describe, expect, it } from 'vitest'
import { hammingDistance } from '.'

describe('hammingDistance', () => {
  it('should return the distance between two number', () => {
    expect(hammingDistance(1, 4)).toBe(2)
    expect(hammingDistance(3, 1)).toBe(1)
  })
})
