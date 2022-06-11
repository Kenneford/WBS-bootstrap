/**
 * Create the class Calculator
 * this class has 3 methods:
 * - history: once the = key is pressed, it keeps the last value in
 *            memory in an array
 * - equals: returns the value (thanks to an 'eval' function)
 * - clear: clears the history
 */
//  class Calculator {
//     constructor() {
//     this._history = "history",
//     this._equals = "equals",
//     this._clear = "clear"
//     }
//     history() {
      
//     }
//     equals(total) {
//     const sum = eval(total)
//     return sum
//     }
//     clear() {}
//   }
    
//     const calculatorScreen = document.querySelector("#calculator.screen");
//     const equals = document.querySelector("#calculator.eval");

//     const addUp = new Calculator()
//     const newValue = addUp.equals()
//     equals.addEventListener("click", ()=>{
//     addUp.equals(calculatorScreen.innerText)
//     calculatorScreen.innerText = newValue
// });

class Calculator {
  constructor() {
    this._history = []
  }
  history(lastValue) {
    this._history.push(lastValue)
  }
  equals(expression) {
    const newValue = eval(expression)
    this.history(newValue)
    return newValue
  }
  clear() {
    this._history = []
  }
}

const calculatorScreen = document.querySelector("#calculator .screen");
const equals = document.querySelector("#calculator .eval");

  equals.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
      equals.newValue
  }
})


  /**
   * This function below write the value of the pressed key on the screen
   * The += is the equivalent of:
   * document.querySelector('.screen').innerHTML = document.querySelector('.screen').innerHTML + val;
   *
   **/
    function print(val) {
    calculatorScreen.innerHTML += val;
  }
  
  //this code listen to every key on the calculator and add the value on the screen
  document.querySelectorAll("#calculator span").forEach((key) => {
    if (key.innerText !== "=") {
      key.addEventListener("click", (e) => print(e.target.innerText));
    }
  });
  
  const calculator = new Calculator()
  document
    .querySelector("#calculator .clear")
    .addEventListener("click", () => {calculatorScreen.innerHTML = ""
    calculator.clear()
  });
  
  // Implement here the event when the = key is pressed
  equals.addEventListener('click', () => {
    console.log(calculatorScreen.innerText)
    calculatorScreen.innerHTML = calculator.equals(calculatorScreen.innerText)
    console.log(calculator._history)
  }) 