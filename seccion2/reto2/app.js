let dailyBudget = parseInt(window.prompt("Enter your daily budget:"));
let mealCost = 30000;
let bookCost = 50000;
let dailySavings = 20000;

// esta funcion va a verificar si puede cumplir la accion que desea el usuario, en este caso si puede cumplir la accion va a decirle que puede hacerla y va a restar lo que cuesta esa accion de el presupuesto, si no es posible realizar la accion dira que no tenemos el dinero para relaizar la accion
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

// Aqui implemente un do while, no sabia muy bien como se usaba, pero lo que entendi es que el do hara que se ejecute el codigo dentro de las llaves y el while va al final y me sirve para salir del ciclo con el confirm
 do{
    let choice = window.prompt("What do you want to do with your budget? (eat / book / save / nothing)").toLowerCase();

    if (choice === "eat") {
        performAction("eat out", mealCost);
    } else if (choice === "book") {
        performAction("buy a book", bookCost);
    } else if (choice === "save") {
        performAction("Decided to save the money for today.", dailySavings);
    } else if (choice === "nothing") {
        console.log("You decided not to do anything else.");
        break
    } else {
        console.log("Invalid option.");
        continue;
    }
    
    // let continuePrompt = window.confirm("Do you want to do something else?");
    // if (!continuePrompt) {
    //     break;
    // }

}while(confirm("DO you want to do someting else?"))

console.log(`After your decisions, you have ${dailyBudget} budget left.`);
