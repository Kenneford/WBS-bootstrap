const tasksArray = ["make coffe", "walk the dog", "make breakfast"]

function makeTaskHTML(task){
    return `<div>
    <input type="checkbox" class="form-check-input">
    ${task}</div>`
}

function renderTasks(){
    const outputElement = document.getElementById("output")
    outputElement.innerHTML = ''
    tasksArray.forEach((task) =>{
        console.log(task)
        outputElement.innerHTML += makeTaskHTML(task)//"<div>" + task + "</div>"
    })
}

function addTask(){
    const inputElement = document.getElementById('todoDescription')
    if (!inputElement.value){
        alert("Empty value not allowed")
        // document.getElementById('message').innerText = "Empty value not allowed"
        // document.getElementById('message').style.display = "block"
        return
    }
    tasksArray.push(inputElement.value)
    inputElement.value = ""
    document.getElementById('message').innerText = ""
    document.getElementById('message').style.display = "none"
    renderTasks()
}
renderTasks()