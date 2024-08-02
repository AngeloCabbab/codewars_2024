function descendingOrder(n) {
//convert the integer to a string and then to an array of characters (digits)
const digits = n.toString().split('');
//sort the array in descending order
const sortedDigits = digits.sort((a, b) => b - a);
//join the sorted array back into a string and convert it to an integer
const sortedNumber = parseInt(sortedDigits.join(''), 10);
return sortedNumber;
}
//example usage:
console.log(descendingOrder(42145)); //output: 54421
console.log(descendingOrder(145263)); //output: 654321
console.log(descendingOrder(123456789)); //output: 987654321