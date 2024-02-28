import { describe, expect, it } from 'vitest'
import { reverse } from '.'

describe('reverseInt', () => {
  it('should reverse an integer', () => {
    expect(reverse(123)).toBe(321)
    expect(reverse(120)).toBe(21)
    expect(reverse(123456789)).toBe(987654321)
  })

  it('should reverse a negative integer', () => {
    expect(reverse(-123)).toBe(-321)
    expect(reverse(-123456789)).toBe(-987654321)
  })

  it('should reverse a zero', () => {
    expect(reverse(0)).toBe(0)
  })
})
