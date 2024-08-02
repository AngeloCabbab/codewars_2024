function maxRot(n) {
let numStr = n.toString();
let maxNum = n;
for (let i = 0; i < numStr.length - 1; i++) {
numStr = numStr.slice(0, i) + numStr.slice(i + 1) + numStr[i];
let rotatedNum = parseInt(numStr);
if (rotatedNum > maxNum) {
maxNum = rotatedNum;
}
}
return maxNum;
}
//test cases
console.log(maxRot(56789)); //output: 68957
console.log(maxRot(38458215)); //output: 85821534