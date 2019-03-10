// 1. Update the variable `sortedNums`.
// It should contain the values of `nums` and `nums2` in ascending order
// Tip: you might need to read the documentation for .sort (search "mdn array sort")
function comapre(element1, element2) {
  return element1 - element2;
}
var nums = [10, 1, 5, 29, 100];
var nums2 = [11, 6, 3, 29, 12];

//copy orignal array to a new array
var newArrayNums = nums.slice();
var newArrayNums2 = nums2.slice();

var sortedNums = newArrayNums.concat(newArrayNums2).sort(comapre); // complete this statement

console.log(sortedNums);

// 2. Using code, show that the variables nums and nums2 were not changed

/* 
  EXPECTED RESULT
  ---------------
  [ 1, 3, 5, 6, 10, 11, 12, 29, 29, 100 ]
*/
