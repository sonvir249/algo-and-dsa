export function binaryTargetElement(nums: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  const sortNums = nums.sort((a, b) => a - b);
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === sortNums[middleIndex]) {
      return middleIndex;
    }
    if (target < sortNums[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}
// Big-O= O(logn)

export function recursiveBiarySearch(nums: number[], target: number): number {
  const sortNums = nums.sort((a, b) => a - b);
  return searchTarget(sortNums, target, 0, nums.length - 1);
}
const searchTarget = (
  sortNums: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
): number => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex: number = Math.floor((leftIndex + rightIndex) / 2);

  if (target === sortNums[middleIndex]) {
    return middleIndex;
  }

  if (target < sortNums[middleIndex]) {
    return searchTarget(sortNums, target, leftIndex, middleIndex - 1);
  } else {
    return searchTarget(sortNums, target, middleIndex + 1, rightIndex);
  }
};
