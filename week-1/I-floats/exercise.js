var numberOfStudents = 15;
var numberOfMentors = 8;
var MentorsP = (numberOfMentors / (numberOfStudents + numberOfMentors)) * 100;
var StudentsP = (numberOfStudents / (numberOfStudents + numberOfMentors)) * 100;
console.log("Percentage Students : " + Math.round(StudentsP) + "%");
console.log("Percentage Mentors  : " + Math.round(MentorsP) + "%");
