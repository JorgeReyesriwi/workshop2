// Viaje de julian

const destination = window.prompt("Enter the destination you want to go to:");
console.log(`Destination: ${destination}`);

let daysCount = parseInt(window.prompt("Enter the number of days for the trip:"));
console.log(`Number of days: ${daysCount}`);

let budget = parseInt(window.prompt("Enter the estimated budget for the trip:"));
console.log(`Budget: ${budget}`);

const dailyCost = 80000;

const totalCost = daysCount * dailyCost;

if (budget >= totalCost) {
  console.log("The budget is adequate for the trip.");
} else {
  console.log("The budget is not enough for the number of days.");

  const possibleDays = budget / dailyCost; 

  if (possibleDays === 0) {
    console.log("With this budget, Julian cannot travel any day.");
  } else {
    console.log(`Julian can travel up to ${possibleDays} days with his current budget.`);
  }

  if (budget < totalCost){
    console.log("To meet the travel cost, Julian should adjust his budget or the number of days to fit his initial budget.")
  }
}
