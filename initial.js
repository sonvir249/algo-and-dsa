const fibonacci = (n) => {
  const fib = [0, 1];
  for (let index = 2; index < n; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
  }
  return fib;
};

// console.log(fibonacci(3));

const factorial = (n) => {
  let fact = 1;
  if (n === 0 || n === 1) return fact;

  for (let i = n; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
};

// console.log(factorial(0));

const isPrime = (n) => {
  if (n < 2) return false;
  let numbers = [];
  for (let index = 2; index < n; index++) {
    if (n % 2 === 0) {
      return false;
    }
  }
  return [true];
};

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(8));

const getAllPrimes = (n) => {
  const primeNums = [];
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNums.push(i);
    }
  }
  return primeNums;
};

// console.log(getAllPrimes(21));
const maxLoot1 = (nums) => {
  if (nums.length < 2) {
    return nums[0];
  }

  const loots = new Array(nums.length).fill("");
  loots[0] = nums[0];
  loots[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    loots[i] = Math.max(loots[i - 2] + nums[i], loots[i - 1]);
  }
  return loots[loots.length - 1];
};
// console.log(maxLoot1([2, 7, 3, 1, 4, 2, 1, 8]));

const maxLoot2 = (nums) => {
  if (nums.length < 2) {
    return nums[0];
  }

  const skipFirstHouse = [];
  const skipLastHouse = [];
  for (let i = 0; i < nums.length - 1; i++) {
    skipFirstHouse[i] = nums[i];
    skipLastHouse[i] = nums[i + 1];
  }
  // console.log("skipFirstHouse", skipFirstHouse);
  // console.log("skipLastHouse", skipLastHouse);
  console.log(maxLoot1(skipFirstHouse), maxLoot1(skipLastHouse));
  return Math.max(maxLoot1(skipFirstHouse), maxLoot1(skipLastHouse));
};
// maxLoot2([2, 7, 3, 1, 4, 2, 1, 8]);
// console.log(maxLoot2([2, 7, 3, 1, 4, 2, 1, 8]));

const maxLoot3 = (nums) => {
  if (nums.length < 2) {
    return nums[0];
  }

  const sortNums = nums.sort((a, b) => a - b);
  console.log(sortNums);

  const loots = new Array(sortNums.length - 1).fill("");
  loots[0] = loots[1];
  loots[1] = Math.max(nums[1], nums[2]);
  for (let i = 3; i < sortNums.length; i++) {
    loots[i] = Math.max(loots[i - 2] + nums[i], loots[i - 1]);
  }
  return loots[loots.length - 1];
};
maxLoot3([2, 7, 3, 1, 4, 2, 1, 8]);
console.log(maxLoot3([2, 7, 3, 1, 4, 2, 1, 8]));
