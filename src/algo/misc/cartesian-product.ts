export function cartesianProduct<T extends number>(
  arr1: T[],
  arr2: T[]
): [T, T][] {
  const result: [T, T][] = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result;
}
// Big O - O(mn)
