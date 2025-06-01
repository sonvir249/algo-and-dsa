export function getTargetElement(nums: number[], element: number): number {
  // if (!nums.includes(element)) {
  //   return -1;
  // }
  // return nums.indexOf(element);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === element) {
      return i;
    }
  }
  return -1;
}

// Big O - O(n^2)
