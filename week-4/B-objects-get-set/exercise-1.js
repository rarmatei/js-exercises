/*
    Console.log the values of each property of "kitten"
*/

var kitten = {
  ageMonths: 3,
  isFemale: true,
  furColour: "brown"
};
var kitten2 = {
  ageMonths: 3,
  isFemale: false,
  furColour: "brown"
};

function getKittenGender(cat) {
  if (cat.isFemale) {
    return "Female";
  } else {
    return "Male";
  }
}

// YOUR CODE GOES BELOW HERE
console.log(kitten.ageMonths);
console.log(kitten.isFemale);
console.log(kitten.furColour);
console.log(getKittenGender(kitten));

console.log(getKittenGender(kitten2));
// YOUR CODE GOES ABOVE HERE
