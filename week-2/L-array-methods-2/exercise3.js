/*
  Array methods - .includes()
  ---------------------------
  Complete the function below to check if a country is in the UK
*/

var ukNations = ["Scotland", "Wales", "England", "Northern Ireland"];


function isInUK(country) {
  return ukNations.includes(country);

function isInUk(country) {
  return; // complete this statement

}

/*
  PLEASE IGNORE LINES BELOW
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
console.log(isInUK("France"));
console.log(isInUK("Republic of Ireland"));
console.log(isInUK("England"));

module.exports = {
  ukNations,
  isInUK
};

/*
  EXPECTED RESULT
  ---------------
  false
  false
  true
*/
