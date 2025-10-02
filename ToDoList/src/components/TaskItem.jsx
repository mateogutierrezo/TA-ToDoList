import { memo, useContext } from 'react'
import { TasksContext } from '../App';

const TaskItem = memo(({task}) => {
    const { handleDelete, handleComplete } = useContext(TasksContext);

    let priority = "";
    switch (task.priorityNum) {
        case 1: 
            priority = "Prioridad Alta";
            break;
        case 2: 
            priority = "Prioridad Media";
            break;
        case 3: 
            priority = "Prioridad Baja";
            break;
    }

    return (
        <li className={task.completed ? "completed" : "uncompleted"}>
            <div className="task-info">
                {task.name}
                <p>{priority}</p>
            </div>
            <div className="task-buttons">
                <button onClick={() => handleComplete(task.id)}>{task.completed ? "🔄" : "✔️"}</button>
                <button onClick={() => handleDelete(task.id)}>🚮</button>
            </div>
        </li>
    )
})  

export default TaskItem