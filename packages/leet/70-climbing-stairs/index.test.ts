import { describe, expect, it } from 'vitest'
import { climbingStairs, climbingStairs2 } from '.'

describe('climbingStairs', () => {
  // it('should return 0 for 0 steps', () => {
  //   expect(climbingStairs(0)).toBe(0)
  // })

  it('should return 1 for 1 steps', () => {
    expect(climbingStairs(1)).toBe(1)
  })

  it('should return 2 for 2 steps', () => {
    expect(climbingStairs(2)).toBe(2)
  })

  it('should return 3 for 3 steps', () => {
    expect(climbingStairs(3)).toBe(3)
  })

  it('should return 5 for 4 steps', () => {
    expect(climbingStairs(4)).toBe(5)
  })
})

describe('climbingStairs2', () => {
  it('should return 1 for 1 steps', () => {
    expect(climbingStairs2(1)).toBe(1)
  })

  it('should return 2 for 2 steps', () => {
    expect(climbingStairs2(2)).toBe(2)
  })

  it('should return 3 for 3 steps', () => {
    expect(climbingStairs2(3)).toBe(3)
  })

  it('should return 5 for 4 steps', () => {
    expect(climbingStairs2(4)).toBe(5)
  })
})
