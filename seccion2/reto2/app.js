let dailyBudget = parseInt(window.prompt("Enter your daily budget:"));
let mealCost = 30000;
let bookCost = 50000;
let dailySavings = 20000;

function performAction(action, cost) {
    if (dailyBudget >= cost) {
        console.log(`You can ${action} today`);
        dailyBudget -= cost;
        console.log(`You have a budget of ${dailyBudget} left after ${action}.`);
        return true;
    } else {
        console.log(`You don't have enough money to ${action} today.`);
        return false;
    }
}

while (true) {
    let choice = window.prompt("What do you want to do with your budget? (eat / book / save / nothing)").toLowerCase();

    if (choice === "eat") {
        performAction("eat out", mealCost);
    } else if (choice === "book") {
        performAction("buy a book", bookCost);
    } else if (choice === "save") {
        performAction("Decided to save the money for today.", dailySavings);
    } else if (choice === "nothing") {
        console.log("You decided not to do anything else.");
    } else {
        console.log("Invalid option.");
        continue;
    }

    let continuePrompt = window.confirm("Do you want to do something else?");
    if (!continuePrompt) {
        break;
    }
}

console.log(`After your decisions, you have ${dailyBudget} budget left.`);
