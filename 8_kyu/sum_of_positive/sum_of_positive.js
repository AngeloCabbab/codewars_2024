function positiveSum(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
if (arr[i] > 0) {
sum += arr[i];
}
}
return sum;
}
//test the function with the example array [1, -4, 7, 12]
const arr = [1, -4, 7, 12];
const result = positiveSum(arr);
console.log(result);//output: 20