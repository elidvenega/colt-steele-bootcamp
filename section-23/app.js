// Default Paramaters
function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides) + 1;
}

function greet(person, msg = "Hello") {
  console.log(`${msg} ${person}`);
}

////////// Spread Operators///////////
// const arr = [1,2,3,4,5,6,7]
// console.log(...arr);
// console.log(arr);

////////Rest and Spread////////
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];

console.log(allPets);

const hello = "Hello";

console.log([...hello]);
console.log(...hello);

const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  isFurry: true,
  family: "Canina",
};

const catDog = {
  ...feline,
  ...canine,
};

console.log(catDog);

// Destructuring objects
const user = {
  email: "harvey@gmail.com",
  password: "sCoTt1948sMith",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an American politician",
  city: "San Francisco",
  state: "California",
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// console.log(firstName, lastName, email);

// const {
//   email,
//   password = "1234",
//   secondEmail = "harvey@proton",
//   firstName,
//   lastName,
//   bio,
// } = user;

// const { born: birthYear } = user;

// const randArr = [1, 2, 3, 4];
// const randArr2 = [5, 6, 7, 8];

// const [a, b, ...rest] = randArr;

// console.log(rest);

// Destructuring Params
// function fullName(user) {
//   return `${user.firstName}`
// }

// console.log(fullName(user));

const fullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};


console.log(fullName(user));
