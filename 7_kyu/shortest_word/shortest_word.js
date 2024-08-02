function findShort(s) {
//split the string into an array of words
const words = s.split(' ');
//initialize the shortest word length with a large number
let shortestLength = Infinity;
//iterate through the words and find the shortest word length
for (let word of words) {
if (word.length < shortestLength) {
shortestLength = word.length;
}
}
return shortestLength;
}
//example usage:
console.log(findShort("The quick brown fox jumps over the lazy dog")); //output: 3
console.log(findShort("Simple given a string of words return the length")); //output: 1
console.log(findShort("String will never be empty and you do not need to account for different data types")); //output: 2