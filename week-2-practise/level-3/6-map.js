// 1. Write a function (`capitalise`) that capitalises the first letter of a provided string
// 2. Declare a new array (`mentorsTidy`) containing:
//    - every item from `mentors` run through the `tidyUpString` function
//    - every resulting item run through the `capitalise` function

function tidyUpString(str) {
  if (str.charAt(0) != String) {
    return str.replace("/", "").trim();
  }
}
/*
    .trim()
    .toLowerCase()
    .replace("/", "");
}*/

function capitalise(str) {
  var str1 = str
    .charAt(0)
    .trim()
    .toUpperCase();
  return str1 + str.slice(1);
}

var mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
var newArr = mentors.map(tidyUpString);
var mentorsTidyAndCapitalised = newArr.map(capitalise);

console.log(mentorsTidyAndCapitalised);

/* 
  EXPECTED RESULT
  ---------------
  ["Daniel", "Irina", "Gordon", "Ashleigh"]
*/
