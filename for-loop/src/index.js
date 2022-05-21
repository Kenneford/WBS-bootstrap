'use strict';
const myArray = ["one", "two", "three"];
// for(let number of myArray) {
//     console.log(number)
// }

let allElements = ""
const outputValue = function (x){
    console.log(x)
    allElements += x + "<br>"
}

myArray.forEach(outputValue)
console.log(allElements)

function myForEach(parameterArray, iteratorFunction){
    for (let i = 0; i < parameterArray.length; i++){
        iteratorFunction(parameterArray[i], i)
    }
}

myForEach(myArray, outputValue)