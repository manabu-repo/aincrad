import { describe, expect, it } from 'vitest'
import { isPalindrome, isPalindromeString } from '.'

describe('isPalindromeString', () => {
  it('should return true for a palindrome', () => {
    expect(isPalindromeString('racecar')).toBe(true)
  })

  it('should return false for a non-palindrome', () => {
    expect(isPalindromeString('racecar2')).toBe(false)
  })

  it('should return false for an empty string', () => {
    expect(isPalindromeString('')).toBe(false)
  })

  it('should return false for a string with only spaces', () => {
    expect(isPalindromeString('   ')).toBe(false)
  })

  it('should return false for a string with non-alphanumeric characters', () => {
    expect(isPalindromeString('a*b')).toBe(false)
  })

  it('should return false for a string with non-alphabetical characters', () => {
    expect(isPalindromeString('123')).toBe(false)
  })
})

describe('isPalindrome', () => {
  it('should return true for a palindrome', () => {
    expect(isPalindrome(121)).toBe(true)
  })

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome(-121)).toBe(false)
  })

  it('should return false for a non-string', () => {
    expect(isPalindrome(10)).toBe(false)
  })
})
