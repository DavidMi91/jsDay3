// Exercise 2 
// for (let i = 1; i < 101; i++ ) {
//     if (i%5) {result = i};
//     if ((i%3)==0) { result = "Fizz"};
//     if ((i%5)==0 && (!(i%3)==0)) { result = "Buzz"};
//     if ((i%5)==0 && ((i%3)==0)) { result = "FizzBuzz"};
//     console.log (result);
// }

// Exercise 3

// for (var i = ""; i.length < 7; i += "*") {
//     if (i == 0) {

//     }
//     else {
//         console.log(i);
//     }
// }

Student = ["John", "Jane"]
MathGrades =[70,85]
var studentName = prompt("Type a student's name please")

    if (Student.indexOf(studentName) > -1) { //indexof returns -1 for no match, and a number for match
        document.getElementById("student").innerHTML = studentName;
        var gradeIndex = Student.indexOf(studentName);
        var points = MathGrades[gradeIndex];
        document.getElementById("points").innerHTML = points;   
      } else {
        document.getElementById("statement").innerHTML = ("Sorry " + studentName + " you don't seem to be a math student."); // fail statement
      }
    if(points < 60){
        document.getElementById("points").style.color = "red";
    } else if (points > 60){
        document.getElementById("points").style.color = "orange";
    } else if (points > 70){
        document.getElementById("points").style.color = "green";
    } else if (points >= 100){
        document.getElementById("points").style.color = "blue";
    }
      
      