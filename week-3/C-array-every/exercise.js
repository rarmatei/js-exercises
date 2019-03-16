/*
   Write a function that checks if the array `group` contains only students
   The array `students` is provided. You can use this inside of your function.
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];

// -- Complete this function -->
function hasOnlyStudents() {}

// DEBUG
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function allNames (name){
  return students.includes(name);
}

var groupIsOnlyStudents = group.every(allNames);  // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

// Expected output: The group does not contain only studnets

module.exports = { hasOnlyStudents };
