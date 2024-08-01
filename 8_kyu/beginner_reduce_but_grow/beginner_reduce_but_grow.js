function grow(x){
return x.reduce((acc, val) => acc * val, 1);
}
const result = grow([1, 2, 3, 4]);
console.log(result);