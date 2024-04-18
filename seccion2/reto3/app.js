let weather = window.prompt("Enter the weather (sunny or rainy):").toLowerCase();

// Verificar si el clima ingresado es válido
if (weather !== "sunny" && weather !== "rainy") {
  console.log("Invalid weather input. Please enter 'sunny' or 'rainy'.");
} else {
    let remainingSpace = parseFloat(window.prompt("Enter the remaining space in your suitcase (in kilograms):"));

    let items = [
        { name: "umbrella", weight: 3 },
        { name: "hat", weight: 1 },
        { name: "camera", weight: 1 },
        { name: "sweater", weight: 3 },
        { name: "sunscreen", weight: 1 }, 
        { name: "flip-flops", weight: 2 }, 
        { name: "book", weight: 2 }, 
        { name: "snacks", weight: 4 },
    ];

    // Ordenar los artículos por peso de forma ascendente
    let sortedItems = items.sort((a, b) => a.weight - b.weight);

    //                                                    Funciones                                                                  //

    // Funcion para agregar un item a la maleta
    function addItemToSuitcase(item) {
        if (remainingSpace >= item.weight) {
            console.log(`You added the ${item.name} to your suitcase.`);
            remainingSpace -= item.weight;
            console.log(`You have ${remainingSpace} kilograms of space left in your suitcase.`);
            return true;
        } else {
            console.log(`You don't have enough space to add ${item.name} to your suitcase.`);
            return false;
        }
    }

    // Funcion para decidir si se agrega el sombrero o la sombrilla automaticamente a la maleta
    function addWeatherDependentItems(weather) {
        if (weather === "rainy") {
            console.log("It's raining. We will add the umbrella automatically.");
            let umbrellaIndex = sortedItems.findIndex(item => item.name === "umbrella");
            if (umbrellaIndex !== -1) {
                let umbrella = sortedItems.splice(umbrellaIndex, 1)[0];
                addItemToSuitcase(umbrella);
            }
        } else if (weather === "sunny") {
            console.log("It's sunny. We will add the hat automatically.");
            let hatIndex = sortedItems.findIndex(item => item.name === "hat");
            if (hatIndex !== -1) {
                let hat = sortedItems.splice(hatIndex, 1)[0];
                addItemToSuitcase(hat);
            }
        } else {
            console.log("Invalid weather input.");
        }
    }

    addWeatherDependentItems(weather);

    let addedItems = [];

    // Agregar o no items extra
    while (remainingSpace > 0) {
        let availableItems = sortedItems.filter(item => !addedItems.includes(item.name) && remainingSpace >= item.weight);
        
        if (availableItems.length > 0) {
            let itemOptions = availableItems.map(item => `${item.name} (${item.weight} kg)`);
            let selectedOption = window.prompt(`Choose an item to add:\n${itemOptions.join("\n")}`);
            let selectedItem = availableItems.find(item => item.name.toLowerCase() === selectedOption.toLowerCase());
            
            if (selectedItem) {

                // Llama a la funcion que añade el item a la maleta y hace el proceso de restar la cantidad de espacio disponible en la maleta
                addItemToSuitcase(selectedItem);

                // Item agregado a los items agregados, esto hace que cuando el programa se vuelva a repetir, si el item ya esta en addedItems no salga en el availableItems cuando muestre los items disponibles para agregar
                addedItems.push(selectedItem.name);
            } else {
                console.log("Invalid item selected. No more items will be added.");
                break;
            }
        } else {
            console.log("No more items can be added. Your suitcase is full.");
            break;
        }
    }
}
