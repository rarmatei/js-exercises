function Greeting(hello) {
  var hello = "Hello";
  return hello.toUpperCase();
}
function mentors(mentor) {
  return mentor.toUpperCase();
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

console.log(Greeting() + " " + mentors(mentor1));
console.log(Greeting() + " " + mentors(mentor2));
console.log(Greeting() + " " + mentors(mentor3));
console.log(Greeting() + " " + mentors(mentor4));
console.log(Greeting() + " " + mentors(mentor5));
