// Exercise 1
var rndNumber =  Math.floor(Math.random() * (40 - -5) + -5);
console.log(rndNumber)

if(rndNumber <= 10){
    console.log("The weather is cold");   
    document.getElementById("weathermessage").innerHTML = "The weather is cold";
    document.getElementById('weatherbox').style.backgroundImage="url(https://images.pexels.com/photos/7099645/pexels-photo-7099645.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)";
}
else if(rndNumber < 10, rndNumber <= 25){
    console.log("The weather is moderate")
    document.getElementById("weathermessage").innerHTML = "The weather is moderate";
    document.getElementById('weatherbox').style.backgroundImage="url(https://images.pexels.com/photos/1269777/pexels-photo-1269777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
    
}
else{
    console.log("The weather is hot")
        document.getElementById("weathermessage").innerHTML = "The weather is hot";
        document.getElementById('weatherbox').style.backgroundImage="url(https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)";
}

// Exercise 2 

// var myArray = [1,7,-3,9]
// function findHighestValue(array){
//     let max = Math.max(...array)
//     console.log(max)
// }
// findHighestValue(myArray)
