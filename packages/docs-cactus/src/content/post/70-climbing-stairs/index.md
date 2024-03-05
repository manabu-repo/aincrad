---
title: 'Climbing Stairs'
description: 'The case of the climb stairs problem(爬楼梯)'
publishDate: '2024-03-05'
tags: ['easy', 'algorithm']
---

## Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

```bash
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```bash
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## Solution

The problem is a dynamic programming problem. The key is to think of the problem as a sequence of steps. The number of ways to climb to the top is the sum of the number of ways to climb to the top of the previous step plus the number of ways to climb to the top of the step after the previous step.

```typescript
function climbStairs(n: number): number {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
```

to optimize the space complexity, we can use a single variable to store the result.

```typescript
function climbStairs(n: number): number {
  let dp = 1;

  for (let i = 1; i <= n; i++) {
    dp = dp + (dp - (i - 1 >= 0 ? dp - (i - 1) : 0));
  }

  return dp;
}
```
or

```typescript
function climbingStairs2(n: number): number {
  let a = 1
  let b = 1

  for (let i = 2; i <= n; i++) {
    const c = a + b
    a = b
    b = c
  }

  return b
}
```
