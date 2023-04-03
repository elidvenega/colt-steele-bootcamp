// Default Paramaters
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hello") {
  console.log(`${msg} ${person}`);
}

// Spread Operators
// const arr = [1,2,3,4,5,6,7]
// console.log(...arr);
// console.log(arr);

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

console.log(allPets);
