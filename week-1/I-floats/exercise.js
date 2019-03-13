var numberOfStudents = 15;
var numberOfMentors = 8;
var totalno = numberOfStudents + numberOfMentors;
var studentprecentage = (numberOfStudents / totalno) * 100;
var studentprecentage = Math.round(studentprecentage);
var mentorsper = (numberOfMentors / totalno) * 100;
var mentorsper = Math.round(mentorsper);
console.log("Percentage students " + studentprecentage + "%");
console.log("Percentage mentors " + mentorsper + "%");
