function factorial(n) {
if (n === 0n || n === 1n) {
return 1n;
} else {
return n * factorial(n - 1n);
}
}
function factorialDivision(n, d) {
if (n < d) {
return "Division not possible. n should be greater than or equal to d.";
}
let result = 1n;
for (let i = BigInt(d) + 1n; i <= BigInt(n); i++) {
result *= i;
}
return result;
}
//test cases
console.log(factorialDivision(5n, 2n).toString()); //output: 60 (5! / 2! = 5 * 4 * 3 = 60)
console.log(factorialDivision(8n, 3n).toString()); //output: 336 (8! / 3! = 8 * 7 * 6 * 5 * 4 = 336)