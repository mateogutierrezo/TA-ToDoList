import { memo, useContext } from 'react'
import { TasksContext, DisplayModeContext } from '../App';

const TaskItem = memo(({task}) => {
    const { handleDelete, handleComplete } = useContext(TasksContext);
    const { isChecked } = useContext(DisplayModeContext)

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
                <p style={{fontWeight: "bold", fontSize: "20px"}}>{task.name}</p>
                <p className={isChecked ? "display-block" : "display-none"}>{task.description}</p>
                <p style={{fontSize: "12px"}}>{priority}</p>
            </div>
            <div className="task-buttons">
                <button onClick={() => handleComplete(task.id)}>{task.completed ? "🔄" : "✔️"}</button>
                <button onClick={() => handleDelete(task.id)}>🚮</button>
            </div>
        </li>
    )
})  

export default TaskItem