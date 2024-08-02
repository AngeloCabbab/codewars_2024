function getCount(str) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
for (let char of str) {
if (vowels.includes(char)) {
count++;
}
}
return count;
}
//example usage:
console.log(getCount("hello world")); //output: 3
console.log(getCount("abracadabra")); //output: 5
console.log(getCount("javascript"));  //output: 3
console.log(getCount("")); //output: 0