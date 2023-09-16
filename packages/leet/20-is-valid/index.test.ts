import { describe, expect, it } from 'vitest'
import { isValidBrackets } from '.'

describe('isValidBrackets', () => {
  it('should return true', () => {
    expect(isValidBrackets('()')).toBe(true)
    expect(isValidBrackets('()[]{}')).toBe(true)
    expect(isValidBrackets('[()]')).toBe(true)
    expect(isValidBrackets('()[]{}')).toBe(true)
    expect(isValidBrackets('[()]{}')).toBe(true)
    expect(isValidBrackets('[()]{}()')).toBe(true)
    expect(isValidBrackets('[()]{}()[]')).toBe(true)
    expect(isValidBrackets('[()]{}()[]{}')).toBe(true)
    expect(isValidBrackets('[()]{}()[]{}()')).toBe(true)
    expect(isValidBrackets('[()]{}()[]{}()[]')).toBe(true)
    expect(isValidBrackets('[()]{}()[]{}()[]{}')).toBe(true)
  })

  it('should return false', () => {
    expect(isValidBrackets('(]')).toBe(false)
    expect(isValidBrackets('[()]{}(]')).toBe(false)
  })
})
