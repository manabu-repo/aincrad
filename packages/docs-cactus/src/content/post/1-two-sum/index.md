---
title: "Two Sum"
description: "Calculate the sum of two numbers(两数之和)"
publishDate: "27 Feb 2024"
tags: ["easy", "algorithm"]
---

## Problem

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

You may assume that each input would have *exactly* one solution, and you may not use the same element twice.

You can return the answer in any order.

**Example 1:**

```bash
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```bash
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```bash
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Solution

### Traverse

```typescript
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
```

### HashMap

```typescript
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (const [index, element] of nums.entries()) {
    if (map.has(target - element)) {
      return [map.get(target - element)!, index]
    }
    map.set(element, index)
  }

  return []
}
```
