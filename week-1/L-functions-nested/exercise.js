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
function greeting(gr) {
  var hello = "Hello";
  return hello.toUpperCase();
}
function nameUpperCase(name) {
  return name.toUpperCase();
}
var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(geeting) + nameUpperCase(mentor1);
console.log(geeting) + nameUpperCase(mentor2);
console.log(geeting) + nameUpperCase(mentor3);
console.log(geeting) + nameUpperCase(mentor4);
console.log(geeting) + nameUpperCase(mentor5);
