// Challange
const answerfield = document.getElementById('answer');
const students = ['John', 'Jane', 'Martin', 'Thomas', 'Klaus', 'Maria', 'David'];
const mathGrades = [70, 85, 76, 85, 65, 58, 100];

function checkDB(name) {
    let arrindex = -1;
    students.forEach(function(arrayName, index) {
        if (arrayName == name) {arrindex = index}   
    })
    return arrindex;
}
var index = -1;
while (index < 0) {
    var studentsName = prompt("type your name");
    index = checkDB(studentsName);
    if (index < 0) {alert('Name is not in index, please type an valid one!')};
}
const grade = mathGrades[index];
var textColor = 'blue';
switch(true) {
    case (grade < 60) :
        textColor = 'red';
        break;
    case (grade < 70) :
        textColor = 'yellow';
        break;
    case (grade < 100) :
        textColor = 'green';
        break;
}

answerfield.innerHTML = `${studentsName} has reached ${grade} points in Math this season.`
answerfield.style.color = textColor;
answerfield.style.background = 'lightgray';
