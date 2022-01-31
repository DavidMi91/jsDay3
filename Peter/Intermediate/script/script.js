// Exercise 1

//array of students
const students = {Martin: 76, Thomas: 85, Klaus: 65, Maria: 93, David: 81};

//function to calculate the grading
function getGrade (points) {
    let Grade = 'A'
    switch(true) {
        case (points < 60) :
            Grade = 'F';
            break;
        case (points < 70) :
            Grade = 'D';
            break;
        case (points < 80) :
            Grade = 'C';
            break;
        case (points < 90) :
            Grade = 'B';
    }
    return Grade;
}

//output all students
for (student in students) {
    console.log(`${student} have an average grade of ${students[student]} points, this means it is an: ${getGrade(students[student])}` );
}

// // output class average
// const average = 
// students.forEach(element => {
//     students[element] += sum
// });