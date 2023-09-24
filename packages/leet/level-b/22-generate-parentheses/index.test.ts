import { describe, expect, it } from 'vitest'
import { generateParentheses } from '.'

describe('generateParentheses', () => {
  it('generateParentheses(1) should return ["()"]', () => {
    expect(generateParentheses(1)).toEqual(['()'])
  })

  it('generateParentheses(2) should return ["(())", "()()"]', () => {
    expect(generateParentheses(2)).toEqual(['(())', '()()'])
  })

  it('generateParentheses(3) should return ["((()))", "(()())", "(())()", "()(())", "()()"]', () => {
    expect(generateParentheses(3)).toMatchInlineSnapshot(`
      [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()",
      ]
    `)
  },
  )
})
