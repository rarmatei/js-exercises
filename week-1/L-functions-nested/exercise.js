function percentage(numStudents, total) {
  var numStudents = 15;

  var total = 23;
  var percentageofStudent = Math.round((numStudents / total) * 100);

  return percentageofStudent + "%";
}
function Percentage(numMentors, total) {
  var numMentors = 8;
  var total = 23;
  var percentageofMentors = Math.round((numMentors / total) * 100);
  return percentageofMentors + "%";
}

console.log("Percentage of students" + " " + percentage());

console.log("Percentage of Mentors" + " " + Percentage());
