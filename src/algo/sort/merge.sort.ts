export function mergeSort<T extends number>(arr: T[]): T[] {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge<T extends number>(leftArr: T[], rightArr: T[]): T[] {
  const sortedArr: T[] = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] >= rightArr[0]) {
      const val = rightArr.shift();
      if (val !== undefined) sortedArr.push(val);
    } else {
      const val = leftArr.shift();
      if (val !== undefined) sortedArr.push(val);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
