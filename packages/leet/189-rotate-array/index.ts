export function rotate(nums: number[], k: number): void {
  const n = nums.length
  const newArr = new Array(n)

  for (let i = 0; i < n; ++i)
    newArr[(i + k) % n] = nums[i]

  for (let i = 0; i < n; ++i)
    nums[i] = newArr[i]
}

export function rotate1(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const last = nums.pop()
    nums.unshift(last!)
  }
}

export function rotate2(nums: number[], k: number): void {
  const n = nums.length
  let arr: number[] = []

  if (k < n) {
    arr = nums.slice(n - k)
    nums.splice(n - k, k)
  }
  else {
    arr = nums.reverse()
    nums = []
  }

  nums.unshift(...arr)
}
