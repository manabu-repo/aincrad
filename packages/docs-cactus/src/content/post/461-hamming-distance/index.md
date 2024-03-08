---
title: 'Hamming Distance'
description: 'Return the Hamming distance between two integers(汉明距离)'
publishDate: '2024-03-08'
tag: ['easy', 'algorithm']
---

## Problem

The `Hamming distance` between two integers is the number of positions at which the corresponding bits are different.

Given two integers `x` and `y`, return the ~~Hamming distance~~ between them.


**Example 1:**

```bash
Input: x = 1, y = 4
Output: 2
Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
```

**Example 2:**

```bash
Input: x = 3, y = 1
Output: 1
```

## Solution

```ts
function hammingDistance(x: number, y: number): number {
  let xor = x ^ y
  let count = 0

  while (xor) {
    count++
    xor &= xor - 1
  }

  return count
}
```
