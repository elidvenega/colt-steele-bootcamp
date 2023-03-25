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

let input = prompt("Hey, say something!");
while (true) {
  input = prompt(input);
  if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN!");
