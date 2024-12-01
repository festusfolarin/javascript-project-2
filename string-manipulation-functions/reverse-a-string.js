function stringReverse(string) {
  let arr = string.split("");
  let rev = arr.reverse();
  let strRev = rev.join("");
  return strRev;
}

console.log(stringReverse("Goodbye"));
