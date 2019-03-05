var numberOfStudents = 15;
var numberOfMentors = 8;
var totalOfPeople = numberOfStudents + numberOfMentors;
var perOfStudents = (numberOfStudents / totalOfPeople) * 100;
var perOfMentors = (numberOfMentors / totalOfPeople) * 100;
var perRooughMentors = Math.round(perOfMentors);
var perRoughStudents = Math.round(perOfStudents);
console.log("Persentage students: " + perRoughStudents + "%");
console.log("Persentage mentors: " + perRooughMentors + "%");
