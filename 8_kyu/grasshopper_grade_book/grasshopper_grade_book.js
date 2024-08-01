function getGrade(s1, s2, s3) {
//calculate the average score
const average = (s1 + s2 + s3) / 3;
//determine the letter grade based on the average score
if (average >= 90 && average <= 100) {
return 'A';
} else if (average >= 80 && average < 90) {
return 'B';
} else if (average >= 70 && average < 80) {
return 'C';
} else if (average >= 60 && average < 70) {
return 'D';
} else {
return 'F';
}
}
// example usage:
console.log(getGrade(95, 90, 93)); //output: 'A'