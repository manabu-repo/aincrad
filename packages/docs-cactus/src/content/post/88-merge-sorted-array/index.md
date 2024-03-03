---
title: "Merge Sorted Array"
description: "Merge sorted array(合并两个有序数组)"
publishDate: "3 Mar 2024"
tags: ["top-interview-150", "easy"]
---

## Problem

You are given two integer arrays `nums1` and `nums2`, sorted in `non-decreasing order`, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. `nums2` has a length of `n`.

**Example 1:**

```bash
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
```

**Example 2:**

```bash
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
```

**Example 3:**

```bash
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
```

## Solution

### Sorted

```ts
function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  // modify nums1 in-place instead.
  nums1.splice(m, nums1.length - m, ...nums2)
  nums1.sort((a, b) => a - b)
  return nums1
}
```

### Two Pointers

```ts
export function merge2(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let p1 = 0
  let p2 = 0
  const sorted = new Array(m + n).fill(0)
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
  for (let i = 0; i != m + n; ++i)
    nums1[i] = sorted[i]

  return nums1
}
```

### Reverse Two Pointer

```ts
export function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
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
```
