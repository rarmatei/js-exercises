
//exercise 1

function Percentage(students, mentors) {
  return Math.round((students / (students + mentors)) * 100);
}
function createMessage(students, mentors, num) {
  var message = "percnetage" + num + ":" + Percentage(students, mentors) + "%";
  return message;
}
console.log(createMessage(15, 8, "students"));
console.log(createMessage(8, 15, "mentors"));

//exercise 2
function mentor(name) {
  return name.toUpperCase();
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function greeting() {
  return "HELLO ";
}

console.log(greeting() + mentor(mentor1));
console.log(greeting() + mentor(mentor2));
console.log(greeting() + mentor(mentor3));
console.log(greeting() + mentor(mentor4));
console.log(greeting() + mentor(mentor5));

