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
