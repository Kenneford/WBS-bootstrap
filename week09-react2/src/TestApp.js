import Todo from "./ToDo/ToDo";
import './TestApp.css'


const person1 = {
    name: 'Hedy lamarr',
    pictureUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    tasks: [
        'Invent new traffic lights',
        'Rehearse a movie scene',
        'Improve the spectrum technology',
    ]
}
const person2 = {
    name: 'Gregorio Y. Zara',
    pictureUrl: 'https://i.imgur.com/7vQD0fPs.jpg',
    tasks: [
        'Invent videophone',
    ]
}
const person3 = {
    name: 'Kwadwo Safo Kantanka',
    pictureUrl: 'http://4.bp.blogspot.com/-QhYI6M2t1po/VVci226l4gI/AAAAAAAAApQ/D1x67twZLhQ/s1600/AFRICAN%2BSTAR%2B1.jpg',
    tasks: [
        'Invent cars',
        'Establish Technical Schools'
    ]
}
const person4 = {
    name: 'John Smith',
    pictureUrl: 'https://www.legendsofamerica.com/wp-content/uploads/2018/01/captainjamessmith.jpg',
    tasks: [
    ]
}
const persons = [person1, person2, person3, person4]
function TestApp(){
    const personsTodos = persons.map((person, index)=>{
        return(
            <Todo person={person} key={'person-todos' + index} />
        )
    })
    return (
        <div>
            <h1>Hello Kenn</h1>
            {personsTodos}
            {/* <Todo person={person1}/>
            <Todo person={person2}/>
            <Todo person={person3}/>
            <Todo person={person4}/> */}
        </div>
    )
}
export default TestApp;