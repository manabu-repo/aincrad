// 20-easy is valid brackets

export function isValidBrackets(str: string): boolean {
  // valid string include '(', ')', '{', '}', '[', ']' and clos in the correct order
  // e.g. '{}', '()[]', '[()[]]'
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
