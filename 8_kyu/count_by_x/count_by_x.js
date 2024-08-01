function countBy(x, n){
let z = [];
for (let i = 1; i <= n; i++){
z.push(x * i);
}
return z;
}
//example usage:
console.log(countBy(1, 10)); //output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]