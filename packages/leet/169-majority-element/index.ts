// 169-easy majority-element

export function majorityElement(nums: number[]): number {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num))
      map.set(num, (map.get(num) ?? 0) + 1)

    else
      map.set(num, 1)

    if ((map.get(num) ?? 0) > nums.length / 2)
      return num
  }
  return -1
}
