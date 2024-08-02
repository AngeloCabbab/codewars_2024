function oddOrEven(array) {
//handle the case of an empty array
if (array.length === 0) {
return "even";
}
//calculate the sum of the array elements
const sum = array.reduce((acc, num) => acc + num, 0);
//determine if the sum is odd or even
return sum % 2 === 0 ? "even" : "odd";
}
//example usage:
console.log(oddOrEven([1, 2, 3])); //output: "even"
console.log(oddOrEven([1, 2, 3, 4])); //output: "odd"
console.log(oddOrEven([0])); //output: "even"
console.log(oddOrEven([])); //output: "even"