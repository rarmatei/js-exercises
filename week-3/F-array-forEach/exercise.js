/*
  Using .forEach() complete the `fizzBuzz` function
  so that it print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number
  - For the multiples of 5 print “Buzz”.
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided for debugging.
*/
// eturn sequence2.splice(sequence2.indexOf(num), 1, "fuzz")}

// Complete this function -->
function changeNumbersToFuzzBuzz(num) {
  if (num % 3 === 0) {
    return "fuzz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else return num;
}
function changMultiblicationToFizzBuzz(num) {
  if (num % 3 == 0 && num % 5 == 0) return "FizzBuzz";
}
// var sequence2 = sequence.slice
//   if (num % 3 === 0) { return sequence.splice(sequence.indexOf(num),1 , "Fuzz") ;}
//   else {return sequence}
//   if (num % 5 === 0) { return sequence.splice(sequence.indexOf(num), 1, "Buzz") ;}
//  if ((num % 3 == 0) && (num % 5 == 0)) { return "FizzBuzz"; }
//  else return num;}
function fizzBuzz(array) {
  return array.map(changeNumbersToFuzzBuzz);
}
// DEBUG
var sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fizzBuzz(sequence));

/*
Expected output:
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
*/

module.exports = { fizzBuzz };
