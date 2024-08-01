function bmi(weight, height) {
const bmiValue = weight / (height * height);
if (bmiValue <= 18.5) {
return "Underweight";
} else if (bmiValue <= 25.0) {
return "Normal";
} else if (bmiValue <= 30.0) {
return "Overweight";
} else {
return "Obese";
}
}
//test the function with sample weight and height values
const weight = 70; //in kg
const height = 1.75; //in meters
const result = bmi(weight, height);
console.log(result); //output: Normal