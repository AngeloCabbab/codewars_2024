function isLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
return true; //lLeap year
} else {
return false; //not a leap year
}
}
//test cases
console.log(isLeapYear(2000)); //output: true (Leap year)
console.log(isLeapYear(1900)); //output: false (Not a leap year)
console.log(isLeapYear(2024)); //output: true (Leap year)