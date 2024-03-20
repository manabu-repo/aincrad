export function removeElement(nums: number[], val: number): number {
  let ans = 0

  for (const num of nums) {
    if (num !== val) {
      nums[ans] = num
      ans++
    }
  }

  return ans

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === val)
  //     nums.splice(i, 1)
  // }

  // return nums.length
}
