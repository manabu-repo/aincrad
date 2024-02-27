---
title: "Is Palindrome"
description: "Check if a string is a palindrome(回文数)"
publishDate: "27 Feb 2024"
tags: ["easy", "algorithm"]
---

## Problem

Given an integer `x`, return true if `x` is a palindrome, and false otherwise.

> A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

**Example 1:**

```bash
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
```

**Example 2:**

```bash
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```bash
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```

## Solution

```ts
function isPalindrome(num: number): boolean {
  const reverse = (num: number): number => {
    return Number(num.toString().split('').reverse().join(''))
  }

  return num === reverse(num)
}
```
