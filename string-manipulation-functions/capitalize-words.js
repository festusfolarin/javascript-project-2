//capitalizes first letter of each word in a sentence
function capitalize(sentence) {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalize("every word here starts with a capital letter."));
