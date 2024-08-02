function betweenExtremes(numbers) {
const maxVal = Math.max(...numbers);
const minVal = Math.min(...numbers);
return maxVal - minVal;
}
//example usage:
console.log(betweenExtremes([23, 3, 19, 21, 16])); //output: 20
console.log(betweenExtremes([1, 434, 555, 34, 112])); //output: 554