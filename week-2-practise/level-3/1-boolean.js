// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
//Variable isHappy is declared as a string because of quotation marks. In if-statement double equal sign means that it will check only the value of the variable, but not type. Thats why code is valid.
// Leave comments above your changes to explain
// I removed quotation marks, becaus it's boolean and i also remooved "== true",as we dont need them.

var isHappy = false;

if (isHappy) {
  console.log("I am happy");
} else {
  console.log("I am not happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
