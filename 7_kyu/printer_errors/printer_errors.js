function printerError(s) {
const validChars = 'abcdefghijklm';
let errorCount = 0;
for (let char of s) {
if (!validChars.includes(char)) {
errorCount++;
}
}
return `${errorCount}/${s.length}`;
}
//example usage:
console.log(printerError("aaabbbbhaijjjm")); //output: "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); //output: "8/22"