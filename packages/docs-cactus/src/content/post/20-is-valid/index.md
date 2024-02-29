---
title: "Valid Parentheses"
description: "Valid Parentheses(有效括号)"
publishDate: "29 Feb 2024"
tags: ["easy", "algorithm"]
---

## Problem

Given a string s containing just the characters `(`, `)`, `{`, `}`, `[` and `]`,
determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```bash
Input: s = "()"
Output: true
```

**Example 2:**

```bash
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```bash
Input: s = "(]"
Output: false
```

## Solution

```ts
function isValid(s: string): boolean {
  if (str.length % 2 !== 0)
    return false

  const brackets = new Map<string, string>([
    ['(', ')'],
    ['{', '}'],
    ['[', ']'],
  ])
  const stack: string[] = []

  for (const bracket of str) {
    if (brackets.has(bracket)) {
      stack.push(bracket)
    }
    else {
      if (stack.length === 0)
        return false

      const last = stack.pop()
      if (brackets.get(last ?? '') !== bracket)
        return false
    }
  }

  return stack.length === 0
}
```
