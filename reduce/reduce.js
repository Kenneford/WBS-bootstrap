const animals = [
    'horse',
    'elephant',
    'yak'
]

const text = animals.reduce((accumulator, animal) => {
    return accumulator + animal[0];
}, '');

const arrayOfFirstLetters = animals.map((animal) => {
    return animal[0];
})

console.log(text);
console.log(arrayOfFirstLetters);
console.log(arrayOfFirstLetters.join(''));

let secondText = '';
animals.forEach((animal) => {
    secondText += animal[0];
});

console.log(secondText);
