// Evaluacion de presupuesto

const initialBudget = parseFloat(window.prompt("Enter Julian's initial budget:"));
const accomodationCost = parseFloat(window.prompt("Enter the estimated accomodation cost:"));
const transportationCost = parseFloat(window.prompt("Enter the estimated transportation cost:"));
const foodCost = parseFloat(window.prompt("Enter the estimated food cost:"));

const totalTripCost = accomodationCost + transportationCost + foodCost;

const moneyLeftOver = 20000;

const remainingBudget = initialBudget - totalTripCost;

if (remainingBudget >= moneyLeftOver) {
  console.log("Julian has enough remaining budget to consider buying an additional item.");
} else {
  console.log("Julian should avoid additional expenses to stay within his budget.");
}
