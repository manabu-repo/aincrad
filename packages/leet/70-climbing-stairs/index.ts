// 70-easy

/**
 * 动态规划、斐波那契数列
 * 设跳上 n 级台阶有 f(n) 种跳法，在所有跳法中，最后一步只有两种情况：跳上 1 级或 2 级台阶
 * 当为 1 时, 剩 n - 1 个台阶, 此时共有 f(n-1) 种跳法
 * 当为 2 时, 剩 n - 2 个台阶, 此时共有 f(n-2) 种跳法
 * 即 f(n) = f(n-1) + f(n-2), 以上情况递推 ....f(2) = 2, f(1) = 1, f(0) = 1
 * @param n
 * @returns
 */
export function climbingStairs(n: number): number {
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= n; i++)
    dp[i] = dp[i - 1] + dp[i - 2]

  return dp[n]
}

// 优化空间复杂度
export function climbingStairs2(n: number): number {
  let a = 1
  let b = 1

  for (let i = 2; i <= n; i++) {
    const c = a + b
    a = b
    b = c
  }

  return b
}
