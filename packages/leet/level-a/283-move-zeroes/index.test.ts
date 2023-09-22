import { describe, expect, it } from 'vitest'
import { moveZeroes } from '.'

describe('moveZeroes', () => {
  it('should move zeroes to the end', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0])
  })

  it('should move zeroes to the end (2)', () => {
    expect(moveZeroes([0, 1, 0, 3, 12, 0, 19])).toEqual([1, 3, 12, 19, 0, 0, 0])
  })

  it('should move zeroes to the end (3)', () => {
    expect(moveZeroes([0])).toMatchInlineSnapshot(`
      [
        0,
      ]
    `)
  })
})
