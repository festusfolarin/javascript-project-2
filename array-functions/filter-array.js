function filterArray(array) {
  return array >= 18;
}

let array = [3, 2, 15, 18, 4, 12, 19, 34];
console.log(array.filter(filterArray));
