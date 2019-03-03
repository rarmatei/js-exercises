var numberOfStudents = 15;
var numberOfMentors = 8;

var totalNumber = numberOfStudents + numberOfMentors;

var studentPercent = (numberOfStudents / totalNumber) * 100;
var roundPercent = Math.round(studentPercent);
console.log("Percentage students: " + roundPercent + "%");

var mentorsPercent = (numberOfMentors / totalNumber) * 100;

console.log("Percentage mentors: " + Math.round(mentorsPercent) + "%");
