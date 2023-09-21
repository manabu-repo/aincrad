// 169-easy majority-element

// export function majorityElement(nums: number[]): number {
//   const map = new Map<number, number>()

//   for (const el of nums)
//     map.set(el, (map.get(el) ?? 0) + 1)

//   // 获取map中最大的key值的索引
//   console.log(map)
//   const maxKey = [...map.values()].reduce((a, b) => a > b ? a : b)
//   return map.get(maxKey) as number
// }

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
