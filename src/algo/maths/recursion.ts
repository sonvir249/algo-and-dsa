export function getLastRecursiveValue(n: number): number {
  if (n < 2) {
    return n;
  }

  return getLastRecursiveValue(n - 1) + getLastRecursiveValue(n - 2);
}

export function getFactorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * getFactorial(n - 1);
}
