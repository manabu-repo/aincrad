---
title: "Roman to Int"
description: "Converts a roman numeral to an integer(罗马数字转整数)"
publishDate: "28 Feb 2024"
tags: ["easy", "algorithm"]
---

## Problem

Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D` and `M`.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, `2` is written as `II` in Roman numeral, just two ones added together. `12` is written as `XII`, which is simply `X + II`. The number `27` is written as `XXVII`, which is `XX + V + II`.

**Example 1:**

```bash
Input: s = "III"
Output: 3
Explanation: III = 3.
```

**Example 2:**

```bash
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
```

**Example 3:**

```bash
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```

## Solution

```ts
function romanToInt(s: string): number {
  if (s.length === 0)
    return 0

  const map = new Map()
  map.set('I', 1)
  map.set('V', 5)
  map.set('X', 10)
  map.set('L', 50)
  map.set('C', 100)
  map.set('D', 500)
  map.set('M', 1000)

  let result: number = map.get(s.charAt(s.length - 1))

  for (let i = 0; i < s.length - 1; i++) {
    if (map.get(s.charAt(i)) >= map.get(s.charAt(i + 1)))
      result += map.get(s.charAt(i))
    else
      result -= map.get(s.charAt(i))
  }
  return result
}
```
