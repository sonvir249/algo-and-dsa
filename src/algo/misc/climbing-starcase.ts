export function climbingStarcase(staircase: number): number {
  const numbOfWays = [1, 2];
  for (let i = 2; i <= staircase; i++) {
    numbOfWays[i] = numbOfWays[i - 1] + numbOfWays[i - 2];
  }

  return numbOfWays[staircase - 1];
}

// worst case - Big - O = O(n)
