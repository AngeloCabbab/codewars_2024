function longest(s1, s2) {
//combine both strings
const combined = s1 + s2;
//convert to a set to remove duplicates
const uniqueChars = new Set(combined);
//convert the set back to an array and sort it
const sortedUniqueChars = Array.from(uniqueChars).sort();
//join the sorted array into a string
return sortedUniqueChars.join('');
}
//example usage:
console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq")); //output: "abcdefklmopqwxy"
console.log(longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")); //output: "abcdefghijklmnopqrstuvwxyz"