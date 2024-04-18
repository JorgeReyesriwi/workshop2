let souvenirList = [];

// Agregar un nuevo souvenir
function addSouvenir(souvenirList, name, cost, available) {
  if (checkDataTypes(name, cost, available)) {
      souvenirList.push({ name, cost, available });
      console.log(`Souvenir "${name}" added to the list.`);
  } else {
      console.log("The souvenir could not be added because the entered data is not correct")
  }
}

function enterSouvenir(numSouvenirs) {
  if (numSouvenirs > 0) {
      let name = window.prompt(`Enter the name of souvenir ${numSouvenirs}:`);
      let cost = parseFloat(window.prompt(`Enter the cost of souvenir ${numSouvenirs}:`));
      let available = window.confirm(`Is souvenir ${numSouvenirs} available? (Click OK for yes, Cancel for no)`);

      addSouvenir(souvenirList, name, cost, available);
      
      enterSouvenir(numSouvenirs - 1); 
  }
}

// Data types verification
function checkDataTypes(name, cost, available) {
  if (typeof name === 'string' && typeof cost === 'number' && typeof available === 'boolean') {
      console.log("Data types are as expected")
      return true;
  } else {
      console.log("Data types are not as expected")
      return false;
  }
}

let numSouvenirs = parseInt(window.prompt("Enter the number of souvenirs you want to enter:"));
enterSouvenir(numSouvenirs);

console.log(souvenirList);
