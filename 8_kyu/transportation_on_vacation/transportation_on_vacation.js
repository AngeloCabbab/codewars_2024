function rentalCarCost(d) {
const dailyRate = 40;
let totalCost = d * dailyRate;
if (d >= 7) {
totalCost -= 50;
} else if (d >= 3) {
totalCost -= 20;
}
return totalCost;
}
console.log(rentalCarCost(1)); //output: 40
console.log(rentalCarCost(3)); //output: 100
console.log(rentalCarCost(7)); //output: 230