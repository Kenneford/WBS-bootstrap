function TaskList({tasks}){
    if(tasks.length < 1){
        return (
            <div>
            Invent something!
        </div>
        )
    }
    const taskList = tasks.map((task, index) => {
        return (
            <li key={index}>
                {task}
            </li>
        );
    })
    return (
        <ul>{taskList}</ul>
    )
}
export default TaskList;
