// function twosum(nums: number[], target: number): number[] {
//   const map: { [key: number]: number } = {};

//   for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     const diff = target - num;
//     if (map[diff] !== undefined) {
//       return [map[diff], i];
//     }
//     map[num] = i;
//   }
//   return [];
// }

export function twoSum(nums: number[], target: number): number[] {
  const map = new Map()

  for (const [index, element] of nums.entries()) {
    if (map.has(target - element))
      return [map.get(target - element), index]

    map.set(element, index)
  }
  return []
}
