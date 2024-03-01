---
title: "Find All Numbers Disappeared in an Array"
description: "Find All Numbers Disappeared(找出数组中所有消失的数字)"
publishDate: "1 Mar 2024"
tag: ["easy", "algorithm"]
---

## Problem

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`,
return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

**Example 1:**

```bash
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]```

**Example 2:**

```bash
Input: nums = [1,1]
Output: [2]
```

## Solution

### Array

```ts
function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }

  return result
}
```

### Set

```ts
function findDisappearedNumbers(nums: number[]): number[] {
  const result: number[] = []
  const set = new Set(nums)
  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i))
      result.push(i)
  }
  return result
}
```
