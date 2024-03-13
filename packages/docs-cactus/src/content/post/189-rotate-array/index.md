---
title: 'Rotate Array'
description: 'Rotate an array by k steps(轮转数组)'
publishDate: '2024-03-13'
tag: ['easy', 'algorithm', 'top-interview-150']
---

## Problem

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

>  Do not return anything, modify nums in-place instead

**Example 1:**

```bash
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
```

**Example 2:**

```bash
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation:
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
```

## Solution

```ts
function rotate(nums: number[], k: number): void {
  const n = nums.length
  const newArr = new Array(n)

  for (let i = 0; i < n; ++i)
    newArr[(i + k) % n] = nums[i]

  for (let i = 0; i < n; ++i)
    nums[i] = newArr[i]
}
```
