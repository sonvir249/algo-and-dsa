export function towerOfHanoi(
  n: number,
  fromRod: string,
  toRod: string,
  usingRod: string
): void {
  if (n === 1) {
    console.log(`Move disk ${1} from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}
