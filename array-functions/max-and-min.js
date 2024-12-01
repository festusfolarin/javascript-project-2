function maxMin(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);
  return `Maximum number is ${max} and minimum number is ${min}`;
}

console.log(maxMin([9, 3, 2, 6, 7, 3, 1, 10]));
