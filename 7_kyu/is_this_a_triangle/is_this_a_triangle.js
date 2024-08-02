function isTriangle(a, b, c) {
return a + b > c && a + c > b && b + c > a && a > 0 && b > 0 && c > 0;
}
//test cases
console.log(isTriangle(3, 4, 5)); //output: true (Triangle can be built with sides 3, 4, 5)
console.log(isTriangle(1, 1, 3)); //output: false (Triangle cannot be built with sides 1, 1, 3)