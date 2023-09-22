// 136-easy

export function singleNumber(nums: number[]): number {
  const map = new Map<number, number>()

  for (const [i, num] of nums.entries())
    map.set(num, (map.get(num) ?? 0) + 1)

  return Array.from(map.entries())
    .filter(([_, v]) => v === 1)
    .map(([k]) => k)
    .pop() as number
}

export function singleNumber2(nums: number[]): number {
  const set = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i]))
      set.delete(nums[i])

    else
      set.add(nums[i])
  }

  return set.values().next().value
}

// 异或运算
// 只满足重复出现的次数为2的情况
export function singleNumber3(nums: number[]): number {
  let res = 0
  for (let i = 0; i < nums.length; i++)
    res ^= nums[i]

  return res
}
