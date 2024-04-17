// Variables que representan los factores para la toma de decisiones
let energyLevel = parseInt(window.prompt("Enter Julian's energy level (0-100):")); // Nivel de energía de Julian (valor entre 0 y 100)
let weather = window.prompt("Enter the weather (sunny, cold, rainy, etc.):").toLowerCase(); // Clima ("sunny", "cloudy", "rainy", etc.)
let workload = window.confirm("Does Julian have a heavy workload?"); // Carga de trabajo (true si hay mucho trabajo, false si no)

// Evaluar las condiciones utilizando declaraciones if-else

if (energyLevel >= 30) {
  console.log("Julian's energy level is too low. He should take a day off and rest.");
} else if (weather === "rainy" && !workload) {
  console.log("It's rainy and Julian doesn't have much work. He will make a hot chocolate.");
} else if (weather === "sunny" && !workload) {
  console.log("It's sunny and Julian doesn't have much work. He should go for a run!");
} else if (weather === "cold" && !workload) {
  console.log("It's cold and Julian doesn't have much work. He will read a book.");
} else if (workload) {
  console.log("Julian has a heavy workload. He should focus on work today.");
} else {
  console.log("It's a good day. Julian should find something productive to do.");
}