// 7-medium

// export function reverse(arr: number[]): number[] {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }

//   return arr;
// }

export function reverse(x: number): number {
  let result: number = 0
  let num: number = x > 0 ? x : -x

  while (num !== 0) {
    result = result * 10 + num % 10
    num = Math.floor(num / 10)
  }

  if (
    (x < 0 && -result < -(2 ** 31))
    || (x > 0 && result > 2 ** 31 - 1)
  )
    return 0

  return x >= 0 ? result : -result
}
