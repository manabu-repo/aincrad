export function rotate(nums: number[], k: number): void {
  const n = nums.length
  const newArr = new Array(n)

  for (let i = 0; i < n; ++i)
    newArr[(i + k) % n] = nums[i]

  for (let i = 0; i < n; ++i)
    nums[i] = newArr[i]
}

export function rotate2(nums: number[], k: number): void {
  const n = nums.length
  const arr = nums.slice(n - k)

  nums.splice(n - k, k)
  nums.unshift(...arr)
}
