let userName = prompt("Input your name")

console.log("User did input: " + userName + ". Number of chars in name: " + userName.length)

const colors = [
    'red',
    'green',
    'orange',
    'blue'
]

let outputElement = document.getElementById("output")

if (userName.length < 5) {
    console.log("This is a short name")
} else if (userName.length < 10) {
    console.log("This is a name of average length")
} 
else {
    console.log("This is a long name")
}



outputElement.innerHTML = "<h2>Hello " + userName + "</h2>"

for (let index = 0; index < colors.length; index++ ) {
    console.log("Element number: " + index + " color is: " + colors[index])
    outputElement.innerHTML += "<div>Element number: " + index + " color is: " + colors[index] + "</div>"
}
