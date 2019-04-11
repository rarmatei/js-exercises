

function percentages(students, mentors){
    var studentsPercentage = Math.round( students / (students + mentors) * 100); 
    var mentorsPercentage = Math.round( mentors / (students + mentors) * 100); 
  
    console.log("Percentage students: " + studentsPercentage + "%");
    console.log("Percentage mentors: " + mentorsPercentage + "%");
    
}
 percentages(15, 8);

// console.log("Number of mentors: " + numberOfMentors);
// console.log("Total number of students and mentors: " + total);
