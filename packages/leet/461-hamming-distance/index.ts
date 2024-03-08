// 461-easy

export function hammingDistance(x: number, y: number): number {
  let xor = x ^ y
  let count = 0

  while (xor) {
    count++
    xor &= xor - 1
  }

  return count
}
