// 283-easy

export function moveZeroes(nums: number[]): number[] {
  let lastNonZeroIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[lastNonZeroIndex], nums[i]] = [nums[i], nums[lastNonZeroIndex]]
      lastNonZeroIndex++
    }
  }

  return nums
}
