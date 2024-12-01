function arraySum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5]));
