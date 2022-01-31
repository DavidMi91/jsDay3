// Exercise 1
console.log('\nExercise 1:\n-------------------------------')

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
let averagesum = 0;
let index = 0;

//output all students
for (student in students) {
    console.log(`${student} have an average grade of ${students[student]} points, this means it is an: ${getGrade(students[student])}` );
    // for output class average
    averagesum += students[student];
    index++;
}
//calculate average of the class and output
averagesum/= index;
console.log(`\nThe average points of the class are ${averagesum}, this is ${getGrade(averagesum)} `)


//==========================================================================================
// Exercise 2
console.log('\nExercise 2:\n-------------------------------')

let output;

for (let i = 1; i < 101; i++ ) {
    output = '';
    if (i%5) {output = i};
    if (!(i%3)) { output = 'Fizz'};
    if (!(i%5)) { output += 'Buzz'};
    console.log (output);
}


//==========================================================================================
// Exercise 3
console.log('\nExercise 3:\n-------------------------------')

const symbol = '*';
const endpoint = '******';
let form = '';

while (form != endpoint) {
    form = form + symbol;
    console.log (form);
}
