// let count = 0;

// while(count < 10) {
//     console.log(count += 1);
// }

//////////////Password///////////////
// const SECRET = "BabyHippo";

// let guess = prompt("ENTER THE SECRET CODE");

// while (guess !== SECRET) {
//   guess = prompt("ENTER THE SECRET CODE");
// }

// console.log("CONGRATS YOU GOT THE SECRET");

//////////////////////////////////////////////////////////////////////////

// let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!");

/////////////////Guessing Game//////////////////

// function guessingGame() {
//   let num = prompt("Enter a number from 1-20");

//   if (num == 10) {
//     return alert("You are correct.");
//   } else if (num <= 9) {
//     return alert("You're guess is too low.");
//   } else if (num > 10) {
//     return alert("You're guess is too high");
//   }
// }

// guessingGame();

////////////////////////////// Guessing Game Udemy/////////////////

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess!");
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attempts++;
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//   } else if (guess < targetNum) {
//     guess = prompt("Too low! Enter a new guess");
//   } else {
//     guess = prompt(`Your Guess is ${guess}, which is not higher or lower, please guess a number value`)
//   }
// }

// if (guess === "q") {
//   console.log("Ok, You Quit!");
// } else {
//   console.log("Congrats you win");
//   console.log(`You got it! It took you ${attempts} guesses`);
//}

/* Object iteration */

const testScores = {
  kenan: 80,
  damon: 67,
  kim: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// for(let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
  total += score;
}

console.log(`The average is ${total / scores.length}`);
