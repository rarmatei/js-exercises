/*
  Only students who have attended enough classes are eligible to sit an exam.
  You have an array named `attendanceCounts`  which contains all the students' names and their attendance counts.
  Using .filter() and .map(), create a new array named "eligibleStudentNames" containing:
  - only the NAMES of the students who have attended AT LEAST 8 classes.
*/

var attendanceCounts = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
];

function studentWhoAttendedAtLeast8Classes(attendance){
  return attendance[1] >= 8;
}

function studentNameWhoAttendedAtLeast8Classes(studentName){
  return studentName[0];
}
var eligibleStudentNames = attendanceCounts.filter(studentWhoAttendedAtLeast8Classes).map(studentNameWhoAttendedAtLeast8Classes); // TODO: Complete this line.

console.log(eligibleStudentNames);

/* expected output
[ 'Ahmed', 'Clement', 'Tayoa', 'Nina' ]
Note: student attendance counts should NOT be included in your console output.
*/
