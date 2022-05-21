'use strict';
function greetSomeone(name) {
    console.log("Hello " + name)
    const contentElement = document.getElementById("content")
    contentElement.innerHTML += "<div>Hello " + name + "</div>"
}


greetSomeone('Daddy')
greetSomeone('Mummy')