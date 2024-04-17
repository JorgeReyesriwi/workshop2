// Evaluacion de presupuesto

const initialBudget = parseFloat(window.prompt("Enter Julian's initial budget:"));
const accomodationCost = parseFloat(window.prompt("Enter the estimated accomodation cost:"));
const transportationCost = parseFloat(window.prompt("Enter the estimated transportation cost:"));
const foodCost = parseFloat(window.prompt("Enter the estimated food cost:"));

const costForItem = 20000;
const umbral = costForItem * 3

const totalTripCost = accomodationCost + transportationCost + foodCost + umbral;

const finalBudget = initialBudget - totalTripCost;

if (finalBudget > umbral) {
  console.log("Julian has enough remaining budget to consider buying an additional item.");
} else {
  console.log("Julian should avoid additional expenses to stay within his budget.");
}
