function findNextSquare(sq) {
const sqrt = Math.sqrt(sq);
if (Number.isInteger(sqrt)) {
const nextInteger = sqrt + 1;
return nextInteger * nextInteger;
} else {
return -1;
}
}
//example usage:
console.log(findNextSquare(121)); //output: 144
console.log(findNextSquare(625)); //output: 676
console.log(findNextSquare(114)); //output: -1
console.log(findNextSquare(144)); //output: 169