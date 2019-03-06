// Declare your function here
function createLongGreeting(name, age) {
  return name, age;
}
var name = "Daniel";
var age = 30;
const greeting = createLongGreeting("Daniel", 30);

console.log("Hello, my name is", name, "and I'm", age, "years old");

// ignore below

module.exports = { createLongGreeting };
