/* Challenge 1: Famous Writers
Did you know you can also have an array of objects? We've created one for you here. Loop through the array, 
and for each object, `console.log()` out the sentence:

"Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."

Here is the array:

*/

var writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];

console.log(
  "Hi, my name is" +
    " " +
    Object.values(writers)
      .slice(0, 1)
      .map(name => name.firstName) +
    " " +
    Object.values(writers)
      .slice(0, 1)
      .map(name => name.lastName) +
    " " +
    " . I am " +
    " " +
    Object.values(writers)
      .slice(0, 1)
      .map(name => name.age) +
    " " +
    "years old,and work as a " +
    " " +
    Object.values(writers)
      .slice(0, 1)
      .map(name => name.occupation) +
    "."
);

console.log(
  "Hi, my name is" +
    " " +
    Object.values(writers)
      .slice(1, 2)
      .map(name => name.firstName) +
    " " +
    Object.values(writers)
      .slice(1, 2)
      .map(name => name.lastName) +
    " " +
    " . I am " +
    " " +
    Object.values(writers)
      .slice(1, 2)
      .map(name => name.age) +
    " " +
    "years old,and work as a " +
    " " +
    Object.values(writers)
      .slice(1, 2)
      .map(name => name.occupation) +
    "."
);

console.log(
  "Hi, my name is" +
    " " +
    Object.values(writers)
      .slice(2, 3)
      .map(name => name.firstName) +
    " " +
    Object.values(writers)
      .slice(2, 3)
      .map(name => name.lastName) +
    " " +
    " . I am " +
    " " +
    Object.values(writers)
      .slice(2, 3)
      .map(name => name.age) +
    " " +
    "years old,and work as a " +
    " " +
    Object.values(writers)
      .slice(2, 3)
      .map(name => name.occupation) +
    "."
);

console.log(
  "Hi, my name is" +
    " " +
    Object.values(writers)
      .slice(3, 4)
      .map(name => name.firstName) +
    " " +
    Object.values(writers)
      .slice(3, 4)
      .map(name => name.lastName) +
    " " +
    " . I am " +
    " " +
    Object.values(writers)
      .slice(3, 4)
      .map(name => name.age) +
    " " +
    "years old,and work as a " +
    " " +
    Object.values(writers)
      .slice(3, 4)
      .map(name => name.occupation) +
    "."
);

writers.forEach(element => {
  console.log(
    "Hi, my name is" +
      " " +
      element.firstName +
      " " +
      element.lastName +
      " " +
      ". Iam " +
      " " +
      element.age +
      " " +
      "and I work as" +
      " " +
      element.occupation
  );
});
/*

If you want an extra challenge, only `console.log()` the writers that are alive.
*/
function isAlive(element) {
  if (element.alive === true) {
    return (
      "I am" +
      " " +
      element.firstName +
      " " +
      element.lastName +
      " " +
      ".Iam" +
      element.age +
      " " +
      "and I work as" +
      element.occupation
    );
  }
}
console.log(writers.filter(isAlive).map(isAlive));
