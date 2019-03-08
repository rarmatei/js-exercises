var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function Capital_Letters() {
  mentor1.toUpperCase();
  mentor2.toUpperCase();
  return mentor1;
}

function Display_Name() {
  return Capital_Letters();
}

var message = Display_Name();

console.log(message);
