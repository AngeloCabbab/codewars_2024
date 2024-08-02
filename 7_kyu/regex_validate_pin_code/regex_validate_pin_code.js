function validatePIN(pin) {
//regular expression to check if the PIN is exactly 4 or 6 digits long
const regex = /^(\d{4}|\d{6})$/;
return regex.test(pin);
}
//example usage:
console.log(validatePIN("1234"));//output: true
console.log(validatePIN("12345"));//output: false
console.log(validatePIN("a234"));//output: false
console.log(validatePIN("123456"));//output: true
console.log(validatePIN("1234567"));//output: false