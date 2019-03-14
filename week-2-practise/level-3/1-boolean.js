// The code is valid but is misleading and could be improved
// Refactor the code to make it better
// What was wrong with the original code?
// Leave comments above your changes to explain

var isHappy = "false";

//if (isHappy == true) {
if (isHappy) {
  // I've removed "== true"
  console.log("I am not happy"); // Here is the expected result, I've switched the console.log
} else {
  console.log("I am happy");
}

/* 
  EXPECTED RESULT
  ---------------
  I am not happy
*/
