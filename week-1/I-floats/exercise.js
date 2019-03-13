var numberOfStudents = 15;
var numberOfMentors = 8;

PerStu = (numberOfStudents / 23) * 100;
PerMent = (numberOfMentors / 23) * 100;

var percentStu = Math.round(PerStu);

var percentMent = Math.round(PerMent);

console.log("Total number of students: " + percentStu + "%");

console.log("Total number of Mentors: " + percentMent + "%");
