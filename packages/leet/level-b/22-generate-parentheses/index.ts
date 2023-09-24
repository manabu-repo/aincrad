// 22-medium

export function generateParentheses(n: number): string[] {
  const res: string[] = []
  const path: string[] = []
  const backtrack = (left: number, right: number) => {
    if (left > n || right > left)
      return

    if (left === n && right === n) {
      res.push(path.join(''))
      return
    }

    path.push('(')
    backtrack(left + 1, right)
    path.pop()
    path.push(')')
    backtrack(left, right + 1)
    path.pop()
  }
  backtrack(0, 0)
  return res
}
