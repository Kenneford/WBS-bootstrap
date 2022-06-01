console.log(
    document.getElementById('myId').innerHTML
)
console.log(
    document.querySelector('li').innerHTML
)

const tastyElements = document.querySelectorAll('.tasty');
console.log(tastyElements[0].innerHTML);

const myIdElement = document.getElementById('myId')
myIdElement.style.fontFamily = "roboto";
myIdElement.innerHTML = "Rate the fruits";


const allFruitElements = document.querySelectorAll('li')

allFruitElements.forEach((fruitElement) =>{
    console.log(fruitElement.innerHTML)
    fruitList.innerHtml +=
})

// const fruitList = document.getElementById('fruits')
// fruitList.innerHtml += "<li>Mango</li>"



// function markAsFavorite(fruitElement) {
//     console.log('clicked' + fruitElement.innerText)
// }
// function enableStarring(){
//     const allFruitElements = document.querySelectorAll('li')
//     allFruitElements.forEach((fruitElement) =>{
//         console.log(fruitElement.innerHTML)
//         fruitElement.addEventListener('click', () => {
//             console.log('clicked' + fruitElement.innerText)
//             fruitElement.innerText += '*'
//         })
//     })
// }


// function addFruit(){
//     console.log('addFruit function called')
//     const inputElement = document.getElementById('fruitInput')
//     const newFruit = inputElement.value
//     const fruitList = document.getElementById('fruits')
//     fruitList.innerHTML += '<li>' + newFruit + '</li>'
// }
// // document.getElementById('addButton').addEventListener('clicck', addFruit)



function clickFunction() {
    // menuBtn.addEventListener('click', function(){
    //     hiddenNav.style.display = "block";
    // })
    // exitBtn.addEventListener('click', function(){
    //     hiddenNav.style.display = "none";
    // })
    // navList.addEventListener('click', function(){
    //     navList.style.display = 'none';
    // })