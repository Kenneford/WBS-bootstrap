import TaskList from "./TaskList";

function Todo({person}){
    return (
        <div>
            <h1>{person.name}'s Todos</h1>
            <img 
            src={person.pictureUrl} 
            alt={person.name} 
            className="photo"
            ></img>
            <TaskList tasks={person.tasks}/>
        </div>
    );
}
export default Todo;
