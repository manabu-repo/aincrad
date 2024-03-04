export function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  // modify nums1 in-place instead.
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
  return nums1
}

export function merge2(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let p1 = 0
  let p2 = 0
  const sorted = Array.from<number>({ length: m + n }).fill(0)
  let cur

  while (p1 < m || p2 < n) {
    if (p1 === m)
      cur = nums2[p2++]
    else if (p2 === n)
      cur = nums1[p1++]
    else if (nums1[p1] < nums2[p2])
      cur = nums1[p1++]
    else
      cur = nums2[p2++]

    sorted[p1 + p2 - 1] = cur
  }
  for (let i = 0; i !== m + n; ++i)
    nums1[i] = sorted[i]

  return nums1
}

export function merge3(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let p1 = m - 1
  let p2 = n - 1
  let tail = m + n - 1
  let cur

  while (p1 >= 0 || p2 >= 0) {
    if (p1 === -1)
      cur = nums2[p2--]
    else if (p2 === -1)
      cur = nums1[p1--]
    else if (nums1[p1] > nums2[p2])
      cur = nums1[p1--]
    else
      cur = nums2[p2--]

    nums1[tail--] = cur
  }

  return nums1
}
