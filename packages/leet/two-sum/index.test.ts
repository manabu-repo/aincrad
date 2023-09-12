import { describe, expect, it } from 'vitest'
import { twoSum } from '.'

describe('twoSum', () => {
  it('should return an array of two numbers', () => {
    // given
    const array = [2, 7, 11, 15]
    const target = 9

    // when
    const result = twoSum(array, target)

    // then
    expect(result).toEqual([0, 1])
  })

  it('should return an empty array if no two numbers sum up to the target', () => {
    // given
    const array = [2, 7, 11, 15]
    const target = 10

    // when
    const result = twoSum(array, target)

    // then
    expect(result).toEqual([])
  })

  it('should return an empty array if the array is empty', () => {
    // given
    const array = []
    const target = 10

    // when
    const result = twoSum(array, target)

    // then
    expect(result).toEqual([])
  })
})
