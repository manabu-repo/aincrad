import { describe, expect, it } from 'vitest'
import { merge } from '.'

describe('merge', () => {
  it('should merge two sorted arrays', () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([1, 2, 2, 3, 5, 6])
  })
})
