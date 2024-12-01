function prime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return `${number} is not a prime number`;
    }
  }
  return `${number} is a prime number`;
}

console.log(prime(29));
