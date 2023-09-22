// 26-easy remove duplicates from sorted array

// 快慢指针
export function removeDuplicates(nums: number[]): number {
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

export function removeDuplicatesArray(nums: number[]): number {
  return [...new Set(nums)].length
}
