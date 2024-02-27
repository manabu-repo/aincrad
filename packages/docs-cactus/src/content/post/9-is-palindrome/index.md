---
title: "Is Palindrome"
description: "Check if a string is a palindrome(回文数)"
publishDate: "27 Feb 2024"
tags: ["easy", "algorithm"]
---

## Problem

Write a function that takes a string and returns true if it is a palindrome, false otherwise.

A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

## Solution

```ts
function isPalindrome(str) {
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}
```
