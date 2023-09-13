import { isEmpty } from '@use-kit/functions'

export function isPalindromeString(str: string): boolean {
  if (isEmpty(str))
    return false

  const reverse = (str: string): string => {
    return str.split('').reverse().join('')
  }

  return str === reverse(str)
}

export function isPalindrome(num: number): boolean {
  const reverse = (num: number): number => {
    return Number(num.toString().split('').reverse().join(''))
  }

  return num === reverse(num)
}
