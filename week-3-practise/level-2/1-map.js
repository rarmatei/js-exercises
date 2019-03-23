/*
I am new to London and would like to know what transport I can take to different famous locations.
An array with London locations have been provided.
Using .map(), print where I can go if I only want to use the river boat.
Note: only the names should be printed, not the means of transport.
*/

var londonLocations = [
  ["Angel", "tube", "bus"],
  ["London Bridge", "tube", "bus", "river boat"],
  ["Tower bridge", "tube", "bus"],
  ["Greenwich", "tube", "bus", "river boat"]
];

// var locationsByBoat = londonLocations
//   .map(function containRiverBoat(arr) {
//     if (arr.includes("river boat")) {
//       return arr[0];
//     }
//   })
//   .filter(el => el !== undefined);
var locationsByBoat = londonLocations
  .filter(arrIncludeRiverBoat => arrIncludeRiverBoat.includes("river boat"))
  .map(returnFirstElementOfArray => returnFirstElementOfArray[0]);

console.log(locationsByBoat);

/* EXPECTED OUTPUT
["London bridge", "Greenwich"]
*/
