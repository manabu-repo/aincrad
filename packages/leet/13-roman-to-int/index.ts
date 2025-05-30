// 13-easy

export function romanToInt(s: string): number {
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
