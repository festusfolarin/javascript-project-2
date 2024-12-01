function fibonacci(number) {
  let n1 = 0;
  let n2 = 1;
  let sum = n1 + n2;
  console.log(n1);
  if (number > 1) {
    console.log(sum);
  }
  for (let i = 1; i < number - 1; i++) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
    console.log(sum);
  }
}

fibonacci(10);
