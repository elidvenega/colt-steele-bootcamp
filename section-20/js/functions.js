// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }

// multiply(2, 3);


// function greet(firstName, LastName) {
//     console.log(`Hey there, ${firstName} ${LastName}`);
// }

// greet('Tom','Hanks')

// DEFINE YOUR FUNCTION BELOW:
function capitalize(str) {
    let firstLetter = str[0].toUpperCase();
    return firstLetter += str.slice(1);

}

console.log(capitalize("dog"));