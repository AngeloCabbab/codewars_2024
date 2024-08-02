function getMiddle(s) {
const length = s.length;
const middleIndex = Math.floor(length / 2);
if (length % 2 === 0) {
//if the length is even, return the middle two characters
return s[middleIndex - 1] + s[middleIndex];
} else {
//if the length is odd, return the middle character
return s[middleIndex];
}
}
//example usage:
console.log(getMiddle("test"));//output: "es"
console.log(getMiddle("testing"));//output: "t"
console.log(getMiddle("middle"));//output: "dd"
console.log(getMiddle("A"));//output: "A"