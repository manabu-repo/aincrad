import { describe, expect, it } from 'vitest'
import { removeElement } from '.'

describe('removeElement', () => {
  it('should remove elements from an array', () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2)
  })
})

describe('removeElement2', () => {
  it('should remove elements from an array', () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
  })
})
