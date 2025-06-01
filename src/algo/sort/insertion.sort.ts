export function insertionSort(array: number[]) {
  const arrayLength = array.length;
  for (let i = 1; i < arrayLength; i++) {
    let numberToSort = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] < numberToSort) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = numberToSort;
  }
}
// Big O - O(n^2)
