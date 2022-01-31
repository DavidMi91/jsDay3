// Basic 1
const temp = () => {
    const temp = (Math.round(Math.random() * 30) - 5);
    let outputText = "The weather is ";
    if (temp < 11) {outputText += "cold";
    } else {outputText += "moderate"};
    return outputText + ` (${temp}°C)`;
}

//to use, type the function in console, so: temp()


// Basic 2
const arr = [1,7,-3,9];

const check = checkarr => {
    let value = 0;
    for (element of checkarr) {
        if (element > value) { value = element}; 
    }
    console.log(`Highest value of the given array is: ${value}`);
}

//to use, type the function in console, with in these case, the defined array as parameter: check(arr)


// Basic 3
